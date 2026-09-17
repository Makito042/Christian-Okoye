'use client';

import React, { useState } from 'react';
import { Mail, Phone, Calendar, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Keynote Speaking',
    eventDate: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="py-20 bg-radial from-neutral-900 via-neutral-950 to-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Book Christian Okoye
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            Available for corporate keynotes, autograph sessions, charity appearances, and media interviews.
          </p>
        </div>
      </section>

      {/* Form & Contact details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                Keynote Topics &amp; Formats
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Christian delivers powerful, engaging presentations drawing on his journey from Nigeria to the peak of NFL dominance.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800">
                <h4 className="font-bold text-white text-sm">Overcoming Unimaginable Odds</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  How discipline, resilience, and adaptability carry you through career transformations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800">
                <h4 className="font-bold text-white text-sm">The Power of Relentless Execution</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Lessons in team culture, mental toughness, and breaking through high-pressure barriers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800">
                <h4 className="font-bold text-white text-sm">Autograph Signings &amp; Corporate Meet-and-Greets</h4>
                <p className="text-xs text-neutral-400 mt-1">
                  VIP photo sessions and personalized signed memorabilia for clients and employees.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Direct Inquiries
              </h4>
              <p className="text-xs text-neutral-300">
                For urgent media, broadcast, or foundation inquiries:
              </p>
              <div className="text-sm font-semibold text-white space-y-1">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>bookings@christianokoye.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-neutral-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Booking Inquiry Received!</h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Thank you for reaching out. Christian&apos;s booking management team will review your event details and respond within 24-48 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold rounded-lg transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
                    Event Request Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-red-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-red-500 transition"
                      >
                        <option>Keynote Speaking</option>
                        <option>Corporate Event / Meet-and-Greet</option>
                        <option>Autograph Signing</option>
                        <option>Charity / Youth Camp Appearance</option>
                        <option>Media / Podcast Interview</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Target Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-red-500 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Event Location / City
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Kansas City, MO"
                        className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-red-500 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Event Details &amp; Budget
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the audience size, event schedule, and specific topics requested..."
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-xl text-sm text-white focus:outline-hidden focus:border-red-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition shadow-lg shadow-red-900/40"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Booking Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
