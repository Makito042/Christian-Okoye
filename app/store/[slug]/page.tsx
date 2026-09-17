import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { ProductDetailClient } from './ProductDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Christian Okoye Store`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
