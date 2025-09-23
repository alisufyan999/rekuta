import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import CTABanner from "@/components/Home/CTABanner";
import JobListing from "@/components/Home/JobListing";
import Process from "@/components/Home/Process";
import Areas from "@/components/Home/Areas";
import Testimonials from "@/components/Home/Testimonials";
import BlogInsights from "@/components/Home/BlogInsights";
import RekutaCTA from "@/components/Home/RekutaCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CTABanner />
      <JobListing />
      <Process />
      <Areas />
      <Testimonials />
      <BlogInsights />
      <RekutaCTA />
    </>
  );
}
