import Image from 'next/image';

export default function AiRecruitHero() {
    return (
      <section className="section-padding pt-0">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            {/* LEFT: copy */}
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-3">Redefining<br/>Recruitment with AI</h1>
  
              <p className="text-secondary mb-3">
                At rekuta.ai, we are on a mission to transform the hiring process
                into something faster, smarter, and fairer. By combining advanced
                AI technology with deep recruitment insight, we help businesses
                find the right talent and empower candidates with equal
                opportunities to shine.
              </p>
  
              <p className="text-secondary mb-4">
                At rekuta.ai, we believe recruitment should be more than filling
                vacancies — it should be about finding the right fit, every time.
                Traditional hiring is slow, biased, and costly. That’s why we built
                Rekuta: an AI-powered recruiter that blends advanced algorithms
                with real-world hiring expertise.
              </p>
  
              <a href="#" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Work with us
              </a>
            </div>
  
            {/* RIGHT: image + floating cards */}
            <div className="col-lg-6">

                {/* <img src="/assets/images/about/about-side1.png"/> */}

                <Image 
                    src="/assets/images/about/about-side1.png" 
                    alt="About section image"
                    width={600}
                    height={400}
                    className="img-fluid"
                />
              
            </div>
            {/* /RIGHT */}
          </div>
        </div>
      </section>
    );
  }
  