import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners & Contact - Ascend | Join Us in Saving Lives',
  description: 'Partner with Ascend to transform healthcare delivery. Contact us for partnerships, investments, or general inquiries.',
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
