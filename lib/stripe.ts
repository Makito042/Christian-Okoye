import Stripe from 'stripe';

// Initialize Stripe with lazy loading fallback so build succeeds even without env vars set
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia' as any,
      appInfo: {
        name: 'Christian Okoye Official Store',
        version: '1.0.0',
      },
    })
  : null;
