import ServiceHero from "@/components/ServiceDetails/ServiceHero";
import AboutSection from "@/components/ServiceDetails/AboutSection";
import ExpertiseSection from "@/components/ServiceDetails/ExpertiseSection";
// import Organization from "@/components/ServiceDetails/Organization";
import WhyChoose from "@/components/ServiceDetails/WhyChoose";
import { servicesData } from "@/data/servicesData";
import ServiceTestimonials from "@/components/ServiceDetails/ServiceTestimonials";
import { Testimonial } from "@/components/ServiceDetails/ServiceTestimonials";
import ServiceSalarySurvey from "@/components/ServiceDetails/ServiceSalarySurvey";
import DynamicServiceCards from "@/components/ServiceDetails/DynamicServiceCards";
import ContactSection from "@/components/Contact/ContactSection";
import ServiceFAQs from "@/components/ServiceDetails/ServiceFAQs";
import ServiceRekuta from "@/components/ServiceDetails/ServiceRekuta";





type Props = { params: { id: string } };

export async function generateStaticParams() {
  return servicesData.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const svc = servicesData.find((s) => s.id === params.id);
  if (!svc) return {};
  return { title: `${svc.title} | Rekuta.ai`, description: svc.description };
}

export default function ServiceDetailPage({ params }: Props) {
  const svc = servicesData.find((s) => s.id === params.id);
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

      {/* {svc.organizations && (
        <Organization
          heading={svc.organizations.heading}
          row1={svc.organizations.row1}
          row2={svc.organizations.row2}
          row3={svc.organizations.row3}
        />
      )} */}

      {svc.whyChoose && (
        <WhyChoose
          heading={svc.whyChoose.heading}
          items={svc.whyChoose.items}
          image={svc.whyChoose.image}
        />
      )}

      {svc.testimonials && (
        <ServiceTestimonials
          row1Testimonials={svc.testimonials.row1}
          row2Testimonials={svc.testimonials.row2}
        />
      )}

      {svc.salarySurvey && (
        <ServiceSalarySurvey
          heading={svc.salarySurvey.heading}
          subtext={svc.salarySurvey.subtext}
          cta1={svc.salarySurvey.cta1}
          cta2={svc.salarySurvey.cta2}
          avatars={svc.salarySurvey.avatars}
          label={svc.salarySurvey.label}
          image={svc.salarySurvey.image}
        />
      )}


{svc.dynamicserviceDetail && svc.dynamicserviceDetail.length >= 4 && (
  <DynamicServiceCards serviceDetail={svc.dynamicserviceDetail} />
)}

<ContactSection/>

{svc.faq && svc.faq.length > 0 && <ServiceFAQs faqs={svc.faq} />}

{svc.servicerekuta && (
  <ServiceRekuta serviceDetail={svc.servicerekuta} />
)}


    </>
  );
}
