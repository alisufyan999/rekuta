import Banner from "@/components/JobDescription/Banner";
import JobDescription from "@/components/JobDescription/JobDescription";
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import RekutaCTA from "@/components/Home/RekutaCTA";


export default function Page() {
  return (
    <>
      <Banner />
      <JobDescription />
      <SalarySurveyBanner />
      <div className="section-padding pt-0"></div>
      <RekutaCTA />
    </>
  );
}
