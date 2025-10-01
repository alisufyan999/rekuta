// app/page.tsx
import JobBanner from "@/components/Job/JobBanner";
import FindJob from "@/components/Job/FindJob";
import CareerSection from '@/components/Job/CareerSection';
import ConsultingCareer from '@/components/Job/ConsultingCareer';
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import JobsWays from "@/components/Job/JobsWays";
import RekutaCTA from "@/components/Home/RekutaCTA";
import ServicesTiles from "@/components/ServiceDetails/ServicesTiles";
import BlogSlider from "@/components/Blog/BlogSlider";

export default function Home() {
  return (
    <>
      <JobBanner />
      <FindJob />
      <ServicesTiles />
      <CareerSection />
      <ConsultingCareer />
      <SalarySurveyBanner />
      <JobsWays />
      <BlogSlider />
      <RekutaCTA />
    </>
  );
}
