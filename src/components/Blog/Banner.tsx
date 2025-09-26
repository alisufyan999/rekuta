'use client';

import React from 'react';

const Banner: React.FC = () => {
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const q = (fd.get('q') as string) || '';
    // TODO: route to your blog search page
    alert(`Search: ${q}`);
  };

  return (
    <section className="container py-4">
      <div className="blogmain-hero position-relative rounded-4 overflow-hidden p-4 p-lg-5">
        {/* Badge */}
        <div className="text-center mb-3">
          <span className="badge blogmain-badge">Insights &amp; Ideas</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="blogmain-title text-center mb-2">
          Explore the Future of Recruitment
        </h1>
        <p className="blogmain-sub text-center mx-auto mb-4">
          Stay updated with the latest trends in AI, hiring strategies, and workplace innovation. Our blog shares
          expert insights, tips, and stories to help businesses hire smarter and professionals grow faster.
        </p>

        {/* Search */}
        <form className="blogmain-search mx-auto" onSubmit={onSearch}>
          <div className="input-group">
            <input
              name="q"
              className="form-control blogmain-input"
              placeholder="Search Blog"
              aria-label="Search blog"
            />
            <button className="btn blogmain-btn" type="submit">
              Search <span aria-hidden>🔍</span>
            </button>
          </div>
        </form>

        {/* Decorative arcs */}
        <div className="blogmain-arc-1" aria-hidden />
        <div className="blogmain-arc-2" aria-hidden />
        <div className="blogmain-arc-3" aria-hidden />
      </div>
    </section>
  );
};

export default Banner;
