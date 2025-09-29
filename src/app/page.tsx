import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import JobListing from "@/components/Home/JobListing";
import Process from "@/components/Home/Process";
import Areas from "@/components/Home/Areas";
import Testimonials from "@/components/Home/Testimonials";
import BlogSlider from "@/components/Blog/BlogSlider";
import RekutaCTA from "@/components/Home/RekutaCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SalarySurveyBanner />
      <div className="section-padding pt-0"></div>
      <JobListing />
      <Process />
      <Areas />
      <Testimonials />
      <BlogSlider />
      <RekutaCTA />
    </>
  );
}
