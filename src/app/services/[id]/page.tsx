import ServiceHero from "@/components/ServiceDetails/ServiceHero";
import AboutSection from "@/components/ServiceDetails/AboutSection";
import ExpertiseSection from "@/components/ServiceDetails/ExpertiseSection";
import WhyChoose from "@/components/ServiceDetails/WhyChoose";
import { servicesData } from "@/data/servicesData";
import Testimonials from "@/components/Home/Testimonials";
import SalarySurveyBanner from "@/components/About/SalarySurveyBanner";
import DynamicServiceCards from "@/components/ServiceDetails/DynamicServiceCards";
import ContactSection from "@/components/Contact/ContactSection";
import ServiceFAQs from "@/components/ServiceDetails/ServiceFAQs";
import ServiceRekuta from "@/components/ServiceDetails/ServiceRekuta";
import TrustSlider from "@/components/ServiceDetails/TrustSlider";
import ClientCentricStats from "@/components/Contact/ClientCentricStats";
import ServicesTiles from "@/components/ServiceDetails/ServicesTiles";
import AwardImages from "@/components/ServiceDetails/AwardImages";

type Props = { params: Promise<{ id: string }> };
export async function generateStaticParams() {
  return servicesData.map((s) => ({ id: s.id }));
}
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const svc = servicesData.find((s) => s.id === id);
  if (!svc) return {};
  return { title: `${svc.title} | Rekuta.ai`, description: svc.description };
}
export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const svc = servicesData.find((s) => s.id === id);
  if (!svc) return <div className="container py-5">Service not found.</div>;
  return (
    <>
      <ServiceHero eyebrow={svc.eyebrow} title={svc.title} description={svc.description} />
      {svc.aboutSection && (
        <AboutSection
          title={svc.aboutSection.title}
          paragraphs={svc.aboutSection.paragraphs}
          ctaText={svc.aboutSection.ctaText}
          image={svc.aboutSection.image}
        />
      )}
      {svc.expertise && (
        <ExpertiseSection heading={svc.expertise.heading} items={svc.expertise.items} />
      )}
      <TrustSlider />
      {svc.whyChoose && (
        <WhyChoose
          heading={svc.whyChoose.heading}
          items={svc.whyChoose.items}
          image={svc.whyChoose.image}
        />
      )}
      <ServicesTiles />
      <ClientCentricStats />
      <Testimonials />
      <SalarySurveyBanner />
      {svc.dynamicserviceDetail && svc.dynamicserviceDetail.length >= 4 && (
        <DynamicServiceCards serviceDetail={svc.dynamicserviceDetail} />
      )}
      <AwardImages />
      <ContactSection />
      {svc.faq && svc.faq.length > 0 && <ServiceFAQs faqs={svc.faq} />}
      {svc.servicerekuta && (
        <ServiceRekuta serviceDetail={svc.servicerekuta} />
      )}

    </>
  );
}
