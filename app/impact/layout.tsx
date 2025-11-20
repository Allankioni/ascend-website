import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impact - Ascend | Lives Saved, Communities Served',
  description: 'See the measurable impact of Ascend\'s medical drone delivery: lives saved, communities served, and healthcare systems strengthened.',
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
