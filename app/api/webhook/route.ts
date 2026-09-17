import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  if (!stripe) {
    return NextResponse.json({ message: 'Stripe not initialized' }, { status: 200 });
  }

  const payload = await req.text();
  const sig = req.headers.get('stripe-signature');
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    if (endpointSecret && sig) {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } else {
      event = JSON.parse(payload);
    }
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle successful checkout
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    console.log(`Payment confirmed for Order from ${session.customer_details?.email}`);
    console.log(`Shipping to:`, session.shipping_details);
    // In production, update database (e.g. Supabase / Postgres) and decrement inventory
  }

  return NextResponse.json({ received: true });
}
