// src/lib/mock-data.ts

export interface Project {
  id: string;
  name: string;
  type: 'web' | 'mobile' | 'design' | 'marketing';
  status: 'active' | 'completed' | 'on-hold';
  lastUpdated: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: string;
  badge?: {
    text: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
  };
  subItems?: Array<{
    name: string;
    href: string;
  }>;
}

export const mockProjects: Project[] = [
  { id: '1', name: 'E-commerce Platform', type: 'web', status: 'active', lastUpdated: '2024-10-20', icon: 'ShoppingCart' },
  { id: '2', name: 'Mobile App Redesign', type: 'mobile', status: 'on-hold', lastUpdated: '2024-10-15', icon: 'Smartphone' },
  { id: '3', name: 'Data Analytics Dashboard', type: 'web', status: 'completed', lastUpdated: '2024-10-10', icon: 'BarChart' },
  { id: '4', name: 'Brand Identity Redesign', type: 'design', status: 'active', lastUpdated: '2024-10-18', icon: 'Palette' },
  { id: '5', name: 'Sales & Marketing Campaign', type: 'marketing', status: 'active', lastUpdated: '2024-10-19', icon: 'TrendingUp' },
  { id: '6', name: 'Travel Booking System', type: 'web', status: 'on-hold', lastUpdated: '2024-10-05', icon: 'Plane' },
];

export const mockNavigation: NavigationItem[] = [
  {
    name: "Playground",
    href: "/playground",
    icon: "LayoutDashboard",
    badge: { text: "New", variant: "default" },
    subItems: [
      { name: "History", href: "/playground/history" },
      { name: "Starred", href: "/playground/starred" },
      { name: "Settings", href: "/playground/settings" },
    ]
  },
  {
    name: "Models",
    href: "/models",
    icon: "Bot",
    subItems: [
      { name: "Overview", href: "/models/overview" },
      { name: "Manage", href: "/models/manage" },
    ]
  },
  {
    name: "Documentation",
    href: "/docs",
    icon: "Book",
    subItems: [
      { name: "Guides", href: "/docs/guides" },
      { name: "API Reference", href: "/docs/api" },
    ]
  },
  {
    name: "Team",
    href: "/team",
    icon: "Users",
    badge: { text: "3", variant: "secondary" },
    subItems: [
      { name: "Members", href: "/team/members" },
      { name: "Roles", href: "/team/roles" },
    ]
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "BarChart",
  },
  {
    name: "Messages",
    href: "/messages",
    icon: "Mail",
    badge: { text: "5", variant: "destructive" }
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "Cog",
    subItems: [
      { name: "General", href: "/settings/general" },
      { name: "Security", href: "/settings/security" },
      { name: "Billing", href: "/settings/billing" },
    ]
  },
];