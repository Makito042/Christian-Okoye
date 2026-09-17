'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Package, DollarSign, Users, TrendingUp, ShieldCheck, Check, AlertCircle, ShoppingBag } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { formatPrice } from '@/lib/utils';

// Mock orders demonstrating custom order & fulfillment tracking
const MOCK_ORDERS = [
  {
    id: "ORD-8821",
    customer: "Dave Henderson",
    email: "dave.h@example.com",
    item: "Autographed Chiefs #35 Custom Red Jersey",
    inscription: "To Dave - The Nigerian Nightmare",
    amount: 18900,
    status: "Shipped",
    tracking: "9400111899223192837192",
    date: "Sep 14, 2026",
  },
  {
    id: "ORD-8822",
    customer: "Sarah Jenkins",
    email: "sjenkins@example.com",
    item: "Autographed Official Wilson Football",
    inscription: "To Marcus - Dream Big!",
    amount: 14900,
    status: "Processing",
    tracking: null,
    date: "Sep 15, 2026",
  },
  {
    id: "ORD-8823",
    customer: "Robert Miller",
    email: "rmiller@company.com",
    item: "Celebrity Golf Classic Entry",
    inscription: null,
    amount: 35000,
    status: "Confirmed",
    tracking: "N/A (Digital Ticket)",
    date: "Sep 15, 2026",
  },
];

export default function AdminDashboardPage() {
  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS);
  const [ordersList, setOrdersList] = useState(MOCK_ORDERS);

  const updateStock = (id: string, delta: number) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p))
    );
  };

  const markShipped = (orderId: string) => {
    setOrdersList((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: 'Shipped', tracking: 'USPS-TRACKING-GENERATED' } : o
      )
    );
  };

  const totalRevenue = ordersList.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-500">
              Custom E-Commerce Platform
            </span>
            <h1 className="text-3xl font-black uppercase text-white tracking-tight mt-1">
              Store &amp; Inventory Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 border border-emerald-800 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
              Stripe Payments Active
            </span>
            <Link
              href="/store"
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-xs font-bold rounded-lg transition"
            >
              View Public Store
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-neutral-400">Total Sales</span>
              <DollarSign className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-2xl font-black text-white mt-2">{formatPrice(totalRevenue)}</p>
            <p className="text-xs text-neutral-500 mt-1">Processed securely via Stripe</p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-neutral-400">Recent Orders</span>
              <ShoppingBag className="w-5 h-5 text-amber-400" />
            </div>
            <p className="text-2xl font-black text-white mt-2">{ordersList.length}</p>
            <p className="text-xs text-neutral-500 mt-1">Pending &amp; fulfilled</p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-neutral-400">Active SKUs</span>
              <Package className="w-5 h-5 text-red-400" />
            </div>
            <p className="text-2xl font-black text-white mt-2">{productsList.length}</p>
            <p className="text-xs text-neutral-500 mt-1">Signed jerseys, balls, photos</p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-neutral-400">Monthly Software Fee</span>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-2xl font-black text-emerald-400 mt-2">$0 / mo</p>
            <p className="text-xs text-neutral-500 mt-1">Self-hosted Next.js vs $39+ Shopify</p>
          </div>
        </div>

        {/* Section 1: Customer Orders */}
        <div className="rounded-3xl bg-neutral-900/70 border border-neutral-800 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              Customer Orders &amp; Inscriptions
            </h2>
            <span className="text-xs text-neutral-400">Real-time fulfillment tracking</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase text-neutral-400 border-b border-neutral-800 pb-2">
                <tr>
                  <th className="pb-3 font-semibold">Order ID</th>
                  <th className="pb-3 font-semibold">Customer</th>
                  <th className="pb-3 font-semibold">Item &amp; Custom Inscription</th>
                  <th className="pb-3 font-semibold">Amount</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {ordersList.map((order) => (
                  <tr key={order.id} className="hover:bg-neutral-850/50">
                    <td className="py-4 font-mono text-xs text-neutral-300">{order.id}</td>
                    <td className="py-4">
                      <div className="font-bold text-white text-xs">{order.customer}</div>
                      <div className="text-[11px] text-neutral-500">{order.email}</div>
                    </td>
                    <td className="py-4 max-w-xs">
                      <div className="text-xs text-white font-medium">{order.item}</div>
                      {order.inscription ? (
                        <div className="text-[11px] text-amber-400 italic">
                          Inscription: &quot;{order.inscription}&quot;
                        </div>
                      ) : (
                        <div className="text-[11px] text-neutral-500">Standard autograph</div>
                      )}
                    </td>
                    <td className="py-4 font-bold text-xs text-white">
                      {formatPrice(order.amount)}
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          order.status === 'Shipped'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-amber-950 text-amber-400 border border-amber-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      {order.status !== 'Shipped' ? (
                        <button
                          onClick={() => markShipped(order.id)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-lg transition"
                        >
                          Mark Shipped
                        </button>
                      ) : (
                        <span className="text-[11px] text-neutral-400 font-mono">
                          {order.tracking}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Product Inventory Management */}
        <div className="rounded-3xl bg-neutral-900/70 border border-neutral-800 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              Stock &amp; Inventory Levels
            </h2>
            <span className="text-xs text-neutral-400">Click + / - to adjust live stock</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productsList.map((product) => (
              <div
                key={product.id}
                className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between"
              >
                <div className="min-w-0 flex-1 pr-4">
                  <h4 className="text-xs font-bold text-white truncate">{product.name}</h4>
                  <p className="text-xs font-bold text-amber-400 mt-1">
                    {formatPrice(product.price)}
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => updateStock(product.id, -1)}
                    className="w-7 h-7 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <span className="text-xs font-black w-8 text-center text-white">
                    {product.stock}
                  </span>
                  <button
                    onClick={() => updateStock(product.id, 1)}
                    className="w-7 h-7 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
