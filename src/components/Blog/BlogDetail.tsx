'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faChevronRight,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const BlogDetail: React.FC = () => {
  return (
    <section className="section-padding blogdetail-section">
        <div className="container">
            <div className="row g-4">
            {/* LEFT: Title + date + Table of Contents */}
            <aside className="col-12 col-lg-4">
            <div className="blogdetail-left">
                <span className="badge blogdetail-badge">5 Min Read</span>

                <h1 className="blogdetail-title mt-2 mb-2">
                Blog Title– Lorem ipsum dolor sit amet, Lorem ipsum dolor sit.
                </h1>

                <div className="text-muted small d-flex align-items-center gap-2 mb-3">
                <FontAwesomeIcon icon={faClock} />
                <span>07/09/2026</span>
                </div>

                <div className="blogdetail-card p-3 p-md-4 rounded-4">
                <div className="fw-bold mb-2">Table of Contents</div>
                <ul className="list-unstyled mb-0 blogdetail-toc">
                    <li>
                    <Link href="#h1">
                        <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                        Heading 1 - Lorem ipsum dolor sit amet
                    </Link>
                    </li>
                    <li>
                    <Link href="#h2">
                        <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                        Heading 2 - Lorem ipsum dolor sit amet
                    </Link>
                    </li>
                    <li>
                    <Link href="#h3">
                        <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                        Heading 3 - Lorem ipsum dolor sit amet
                    </Link>
                    </li>
                    <li>
                    <Link href="#h4">
                        <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                        Heading 4 - Lorem ipsum dolor sit amet
                    </Link>
                    </li>
                    <li>
                    <Link href="#h5">
                        <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                        Heading 5 - Lorem ipsum dolor sit amet
                    </Link>
                    </li>
                    <li>
                    <Link href="#h6">
                        <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                        Heading 6 - Lorem ipsum dolor sit amet
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </aside>

            {/* RIGHT: hero image + article */}
            <div className="col-12 col-lg-8">
            {/* hero image */}
            <div className="ratio ratio-16x9 blogdetail-hero overflow-hidden mb-3">
                <Image
                src="/assets/images/blog/blogdetail.png"
                alt="Blog hero"
                fill
                sizes="(max-width: 991px) 100vw, 68vw"
                style={{ objectFit: 'cover' }}
                />
            </div>

            {/* article body */}
            <article className="blogdetail-article">
                <h2 id="h1" className="blogdetail-h2">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.
                </h2>
                <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                viverra, metus ut hendrerit luctus, tellus magna rutrum felis, vitae
                tempor lorem neque in diam. Proin facilisis non neque at fermentum.
                Pellentesque a dignissim libero, vel finibus ipsum. Curabitur
                vestibulum turpis at turpis eleifend consectetur quis a tellus.
                </p>

                {/* two-column list rows */}
                <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                    <ul className="blogdetail-checklist list-unstyled">
                    <li><FontAwesomeIcon icon={faCheckCircle} className="me-2" />Consectetur adipiscing elit curabitur</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="me-2" />Praesent vehicula aliquamcor augue.</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="me-2" />In suscipit luctus sapien at.</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="me-2" />Sed at tortor accumsan.</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <ul className="blogdetail-checklist list-unstyled">
                    <li><FontAwesomeIcon icon={faCheckCircle} className="me-2" />Praesent vehicula aliquamcor augue.</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="me-2" />In suscipit luctus sapien.</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="me-2" />Sed et tortor accumsan.</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="me-2" />Consectetur adipiscing elit curabitur.</li>
                    </ul>
                </div>
                </div>

                <p className="text-muted">
                Fusce eleifend risus et faucibus dapibus. Nullam vitae purus pretium,
                vestibulum arcu vel, mattis quam. Mauris nec magna sed, iaculis
                neque. Donec dapibus malesuada lectus at porttitor. Cras in justo,
                condimentum vitae viverra a, posuere vel elit. Pellentesque
                malesuada dignissim mauris, eu accumsan dolor sollicitudin quis.
                </p>

                <h3 id="h2" className="blogdetail-h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                viverra, metus ut hendrerit luctus, tellus magna rutrum felis, vitae
                tempor lorem neque in diam. Pellentesque malesuada lectus at
                porttitor. Cras in justo, condimentum vitae viverra a, posuere vel
                elit.
                </p>

                {/* share */}
                <div className="blogdetail-share d-flex align-items-center justify-content-between rounded-4 p-3 p-md-3">
                <span className="text-muted small">
                    Like what you see? Share with a friend.
                </span>
                <div className="d-flex gap-2">
                    <Link href="#" className="blogdetail-social" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                    <Link href="#" className="blogdetail-social" aria-label="Twitter / X">
                    <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link href="#" className="blogdetail-social" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                </div>
                </div>
            </article>
            </div>
        </div>
        </div>
      
    </section>
  );
};

export default BlogDetail;
