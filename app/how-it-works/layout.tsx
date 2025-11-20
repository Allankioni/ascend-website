import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - Ascend | Medical Drone Delivery Process',
  description: 'From emergency request to delivery in minutes: See how Ascend\'s autonomous drone system delivers critical medical supplies with precision and speed.',
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
