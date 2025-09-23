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
                <div className="about-tile p-3 p-md-4 rounded-4 shadow-sm bg-light">
                  <span className="about-icon d-inline-flex align-items-center justify-content-center rounded-3 mb-3">
                    {/* chat/handset glyph (white on blue gradient) */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M7.5 3h9A2.5 2.5 0 0 1 19 5.5v6A2.5 2.5 0 0 1 16.5 14h-2.7l-2.9 2.4c-.7.6-1.9.1-1.9-.8V14H7.5A2.5 2.5 0 0 1 5 11.5v-6A2.5 2.5 0 0 1 7.5 3Z" fill="#fff" opacity=".95"/>
                      <path d="M7.6 16.8c.1.9.8 1.7 1.7 2 .8.3 1.7.1 2.3-.4l2-1.7h1.7c3.3 0 6-2.7 6-6v-.8c.8 0 1.4.6 1.4 1.4V14c0 3.9-3.1 7-7 7h-3.5c-1 0-1.8-.8-1.8-1.8v-1.1l-2.2-1.3c-.4-.2-.6-.6-.6-1 0-.3.1-.6.3-.8l.7-.9Z" fill="#fff" opacity=".9"/>
                    </svg>
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
  