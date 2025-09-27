'use client';

import React from 'react';

const Banner: React.FC = () => {
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get('q') as string;
    // TODO: route to your results page, e.g.:
    // router.push(`/blog?query=${encodeURIComponent(q)}`);
    console.log('Search:', q);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="blogmain-hero position-relative rounded-4 overflow-hidden p-4 p-lg-5">
          {/* badge */}
          <div className="text-center mb-3">
            <span className="badge blogmain-badge">Insights &amp; Ideas</span>
          </div>

          {/* heading & sub */}
          <h1 className="blogmain-title text-center mb-2">
            Explore the Future of Recruitment
          </h1>
          <p className="blogmain-sub text-center mx-auto mb-4">
            Stay updated with the latest trends in AI, hiring strategies, and workplace innovation.
            Our blog shares expert insights, tips, and stories to help businesses hire smarter and
            professionals grow faster.
          </p>

          {/* search */}
          <form className="blogmain-search mx-auto" onSubmit={onSearch} role="search">
            <div className="input-group">
              <input
                name="q"
                className="form-control blogmain-input"
                placeholder="Search Blog"
                aria-label="Search blog"
                required
              />
              <button type="submit" className="btn blogmain-btn">
                <span className="me-1">Search</span>
                <i className="fas fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </form>

          {/* decorative arcs */}
          <div className="blogmain-arc blogmain-arc-1" aria-hidden />
          <div className="blogmain-arc blogmain-arc-2" aria-hidden />
          <div className="blogmain-arc blogmain-arc-3" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default Banner;
