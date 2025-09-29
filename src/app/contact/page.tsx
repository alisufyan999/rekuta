import HeroBanner from "@/components/Contact/HeroBanner";
import CareerCtas from "@/components/Contact/CareerCtas";
import ContactSection from "@/components/Contact/ContactSection";
import Map from "@/components/Contact/Map";
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import ServicesGrid from "@/components/Contact/ServicesGrid";
import ClientCentricStats from "@/components/Contact/ClientCentricStats";
import Faqs from "@/components/Contact/Faqs";
import RekutaCTA from "@/components/Home/RekutaCTA";

export default function Contact() {
  return (
    <>
      <HeroBanner />
      <CareerCtas />
      <ContactSection />
      <Map />
      <CareerCtas />
      <div className="section-padding pt-0"></div>
      <SalarySurveyBanner />
      <div className="section-padding pt-0"></div>
      <ServicesGrid />
      <ClientCentricStats />
      <Faqs />
      <RekutaCTA />
    </>
  );
}
