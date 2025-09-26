// app/page.tsx
import JobBanner from "@/components/Job/JobBanner";
import FindJob from "@/components/Job/FindJob";
import CareerSection from '@/components/Job/CareerSection';
import ConsultingCareer from '@/components/Job/ConsultingCareer';
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import JobsWays from "@/components/Job/JobsWays";
import RekutaCTA from "@/components/Home/RekutaCTA";

export default function Home() {
  return (
    <>
      <JobBanner />
      <FindJob/>
      <CareerSection/>
      <ConsultingCareer/>
      <SalarySurveyBanner/>
      <JobsWays/>
      <RekutaCTA/>
    </>
  );
}
