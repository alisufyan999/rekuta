// app/page.tsx
import JobBanner from "@/components/Job/JobBanner";
import FindJob from "@/components/Job/FindJob";
import CareerSection from '@/components/Job/CareerSection';

export default function Home() {
  return (
    <>
      <JobBanner />
      <FindJob/>
      <CareerSection/>
    </>
  );
}
