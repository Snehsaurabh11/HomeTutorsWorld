// Subject type

export interface Subject {
  id: string;
  name: string;
  icon: string; // emoji or lucide icon name
  color: string; // tailwind bg color class
  description: string;
  levels: string[];
}

// Feature card type (Why Choose Us)
export interface Feature {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
  color: string; // icon accent color class
}

// Navigation link type
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  highlight?: boolean; // for CTA-style nav links
}
