import BlogBanner from "@/components/Blog/Banner";
import BlogCard from "@/components/Blog/BlogCard";
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import Faqs from "@/components/Contact/Faqs";
import RekutaCTA from "@/components/Home/RekutaCTA";

export default function Page() {
    return (
        <>
          <BlogBanner/>
          <BlogCard/>
          <SalarySurveyBanner/>
          <Faqs/>
          <RekutaCTA/>
        </>
      );
}
