import HeroBanner from "@/components/About/HeroBanner";
import AiRecruitHero from "@/components/About/AiRecruitHero";
import AboutTiles from "@/components/About/AboutTiles";
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import TestimonialNew from "@/components/Home/Testimonials";
import BlogSlider from "@/components/Blog/BlogSlider";
import RekutaCTA from "@/components/Home/RekutaCTA";

export default function About() {
  return (
    <>
      <HeroBanner />
      <AiRecruitHero />
      <AboutTiles />
      <SalarySurveyBanner />
      <TestimonialNew />
      <BlogSlider />
      <RekutaCTA />
    </>
  );
}
