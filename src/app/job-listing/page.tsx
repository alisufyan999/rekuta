import Banner from "@/components/JobListing/Banner";
import JobListings from "@/components/JobListing/JobListings";
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import RekutaCTA from "@/components/Home/RekutaCTA";

export default function Page() {
  return (
    <>
      <Banner />
      <JobListings />
      <SalarySurveyBanner />
      <div className="section-padding pt-0"></div>
      <RekutaCTA />
    </>
  );
}
