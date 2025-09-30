// app/components/AboutTiles.tsx
export default function AboutTiles() {
  const data = [
    {
      title: "Our Story",
      text:
        "Rekuta was created to challenge the limits of traditional recruitment. We saw how slow, biased, and costly hiring could be — and decided to build an AI recruiter that makes the process smarter.",
    },
    {
      title: "Our Vision",
      text:
        "To reshape the future of recruitment by empowering companies with intelligent hiring tools and giving candidates equal opportunities to succeed in their careers.",
    },
    {
      title: "Our Mission",
      text:
        "We strive to connect the right people with the right roles through AI-driven accuracy, bias-free matching, and seamless hiring experiences that save time and unlock growth.",
    },
  ];

  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="row g-3 g-md-4">
          {data.map((item, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className="about-tile p-3 p-md-4 rounded-4 shadow-sm">
                <span className="area-icon mb-3">
                  {/* chat/handset glyph (white on blue gradient) */}
                  <img alt="" src="/assets/images/home/icon1.png" />
                </span>

                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="mb-0 text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
