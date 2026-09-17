import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { CartItem } from '@/context/CartContext';

export async function POST(req: Request) {
  try {
    const { items }: { items: CartItem[] } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
    }

    const host = req.headers.get('host') || 'localhost:3000';
    const protocol = req.headers.get('x-forwarded-proto') || 'http';
    const baseUrl = `${protocol}://${host}`;

    // If Stripe Secret Key is not yet configured in .env.local, provide a graceful mock redirect to success
    if (!stripe) {
      return NextResponse.json({
        url: `${baseUrl}/checkout/success?mock=true&items=${encodeURIComponent(
          items.map((i) => i.product.name).join(', ')
        )}`,
      });
    }

    // Prepare line items for Stripe Checkout
    const line_items = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.product.name,
          images: item.product.images.slice(0, 1),
          description: item.inscription
            ? `Autograph Inscription: "${item.inscription}"`
            : item.product.description.slice(0, 200),
        },
        unit_amount: item.product.price,
      },
      quantity: item.quantity,
    }));

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'NG'],
      },
      line_items,
      mode: 'payment',
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: {
        order_details: JSON.stringify(
          items.map((i) => ({
            id: i.product.id,
            name: i.product.name,
            qty: i.quantity,
            inscription: i.inscription || null,
          }))
        ),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe Checkout Session Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create Stripe checkout session' },
      { status: 500 }
    );
  }
}
