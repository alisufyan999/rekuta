import HeroBanner from "@/components/About/HeroBanner";
import AiRecruitHero from "@/components/About/AiRecruitHero";
import AboutTiles from "@/components/About/AboutTiles";
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import Testimonials from "@/components/Home/Testimonials";
import BlogInsights from "@/components/Home/BlogInsights";
import RekutaCTA from "@/components/Home/RekutaCTA";

export default function About() {
  return (
    <>
      <HeroBanner />
      <AiRecruitHero />
      <AboutTiles />
      <SalarySurveyBanner />
      <Testimonials />
      <BlogInsights />
      <RekutaCTA />
    </>
  );
}
