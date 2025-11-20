import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyAscendSection from '@/components/home/WhyAscendSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <WhyAscendSection />
      <CTASection />
    </main>
  );
}
