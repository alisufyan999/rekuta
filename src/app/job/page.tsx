// app/page.tsx
import JobBanner from "@/components/Job/JobBanner";
import FindJob from "@/components/Job/FindJob";

export default function Home() {
  return (
    <>
      <JobBanner />
      <FindJob/>
    </>
  );
}
