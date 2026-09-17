export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'jerseys' | 'footballs' | 'photos' | 'helmets' | 'events';
  price: number; // in cents
  compareAtPrice?: number; // in cents
  images: string[];
  description: string;
  details: string[];
  stock: number;
  featured?: boolean;
  allowInscription?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod_jersey_red",
    slug: "signed-chiefs-red-jersey-35",
    name: "Autographed Kansas City Chiefs #35 Custom Red Jersey",
    category: "jerseys",
    price: 18900, // $189.00
    compareAtPrice: 24900,
    images: [
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Custom on-field style red Kansas City Chiefs jersey hand-signed by Christian Okoye. Features sewn lettering and numbers with full Christian Okoye Certificate of Authenticity (COA) tamper-evident hologram.",
    details: [
      "Hand-signed in silver/black paint pen",
      "Tamper-evident numbered hologram included",
      "Official Christian Okoye Foundation Certificate of Authenticity",
      "Size: XL (Display or Wearable)",
    ],
    stock: 14,
    featured: true,
    allowInscription: true,
  },
  {
    id: "prod_wilson_football",
    slug: "signed-the-nigerian-nightmare-football",
    name: "Autographed Official NFL Leather Football with 'Nightmare' Inscription",
    category: "footballs",
    price: 14900, // $149.00
    compareAtPrice: 19900,
    images: [
      "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Official regulation Wilson leather football hand-signed by 1989 NFL Rushing Champion Christian Okoye, inscribed with his legendary moniker 'The Nigerian Nightmare'.",
    details: [
      "Includes 'The Nigerian Nightmare' official inscription",
      "Genuine leather regulation football",
      "Includes tamper-proof serial-numbered hologram & COA",
      "Protective acrylic display stand included",
    ],
    stock: 8,
    featured: true,
    allowInscription: true,
  },
  {
    id: "prod_mini_helmet",
    slug: "signed-chiefs-speed-mini-helmet",
    name: "Autographed Chiefs Speed Flash Mini Helmet",
    category: "helmets",
    price: 11900, // $119.00
    compareAtPrice: 14900,
    images: [
      "https://images.unsplash.com/photo-1617634103079-61339833c15a?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Riddell Chiefs Speed mini helmet boldly autographed by Christian Okoye with #35 inscription. The perfect desk or sports memorabilia room centerpiece.",
    details: [
      "Officially licensed Riddell NFL Mini Helmet",
      "Includes #35 inscription",
      "Certificate of Authenticity card included",
      "Approx. 5\" tall half-scale replica",
    ],
    stock: 5,
    featured: true,
    allowInscription: false,
  },
  {
    id: "prod_photo_action",
    slug: "signed-1989-rushing-champ-8x10-photo",
    name: "Autographed 8x10 Arrowhead Stadium Iconic Stiff-Arm Photo",
    category: "photos",
    price: 5900, // $59.00
    compareAtPrice: 7900,
    images: [
      "https://images.unsplash.com/photo-1544765773-a8dce1f272f6?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "High-gloss 8x10 action photograph capturing Christian Okoye's legendary trucking run against defenders at Arrowhead Stadium. Signed in crisp permanent sharpie.",
    details: [
      "Museum-grade archival glossy 8x10 print",
      "Hand-signed by Christian Okoye",
      "Includes Christian Okoye Foundation Hologram",
      "Ships flat in rigid top-loader protective sleeve",
    ],
    stock: 22,
    featured: true,
    allowInscription: true,
  },
  {
    id: "prod_golf_ticket",
    slug: "annual-celebrity-golf-tournament-entry",
    name: "Annual Christian Okoye Celebrity Golf Classic - Individual Golfer Entry",
    category: "events",
    price: 35000, // $350.00
    images: [
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Play 18 holes of championship golf alongside NFL legends, celebrities, and Christian Okoye. Includes green fees, cart, continental breakfast, awards banquet dinner, and gift bag. 100% of proceeds support the Christian Okoye Foundation.",
    details: [
      "18 holes with golf cart & tournament entry",
      "Celebrity pairing in your foursome",
      "Awards banquet dinner and silent auction entry",
      "VIP gift bag including signed memorabilia",
      "Tax-deductible charitable foundation receipt",
    ],
    stock: 12,
    featured: false,
    allowInscription: false,
  },
];
