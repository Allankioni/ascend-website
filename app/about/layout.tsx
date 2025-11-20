import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Ascend | Every Second Counts',
  description: 'Learn how Ascend is building a medical logistics ecosystem powered by drone technology to ensure no life is lost because help arrived too late.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
