import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Ascend | Medical Drone Delivery Solutions',
  description: 'Emergency medical deliveries, cold-chain vaccine logistics, lab sample transport, and more. Ascend\'s drone delivery services save lives across remote regions.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
