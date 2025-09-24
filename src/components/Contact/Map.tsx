"use client";

export default function NYMap() {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="rounded-4 shadow-sm overflow-hidden">
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=175%20Pearl%20St,%20Brooklyn,%20NY%2011201,%20United%20States+(Rekuta)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
