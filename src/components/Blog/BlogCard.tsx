"use client";

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  image: string;
  day: string;
  month: string;
  category: string;
  shareCount: number;
  title: string;
  description: string;
}

const BlogCard: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "/assets/images/blog/blogcard1.png",
      day: "15",
      month: "January",
      category: "AI Recruitment",
      shareCount: 24,
      title: "The Future of AI in Talent Acquisition: What Recruiters Need to Know",
      description: "Explore how artificial intelligence is revolutionizing the recruitment process and what it means for the future of hiring."
    },
    {
      id: 2,
      image: "/assets/images/blog/blogcard1.png",
      day: "12",
      month: "February",
      category: "Hiring Trends",
      shareCount: 18,
      title: "Remote Work Revolution: How Companies Are Adapting",
      description: "Discover the latest trends in remote hiring and how companies are building successful distributed teams."
    },
    {
      id: 3,
      image: "/assets/images/blog/blogcard1.png",
      day: "08",
      month: "March",
      category: "Career Development",
      shareCount: 32,
      title: "Skills-Based Hiring: Moving Beyond Traditional Qualifications",
      description: "Learn why skills-based hiring is becoming the new standard and how it benefits both employers and candidates."
    },
    {
      id: 4,
      image: "/assets/images/blog/blogcard1.png",
      day: "22",
      month: "March",
      category: "Technology",
      shareCount: 15,
      title: "Blockchain in HR: Securing Employee Data and Streamlining",
      description: "Understand how blockchain technology is being implemented in human resources to enhance security and efficiency."
    },
    {
      id: 5,
      image: "/assets/images/blog/blogcard1.png",
      day: "05",
      month: "April",
      category: "Diversity & Inclusion",
      shareCount: 28,
      title: "Building Inclusive Workplaces: A Guide for Modern Employers",
      description: "Discover practical strategies for creating more diverse and inclusive work environments that drive innovation."
    },
    {
      id: 6,
      image: "/assets/images/blog/blogcard1.png",
      day: "18",
      month: "April",
      category: "Employee Experience",
      shareCount: 21,
      title: "The Great Resignation: Understanding Employee",
      description: "Analyze the factors driving employee turnover and learn effective strategies for improving retention rates."
    }
  ];

  return (
    <section className="section-padding pt-0">
      <div className="container">
        {/* Grid Layout */}
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <article className="card blog-card rounded-4 p-3 p-md-4">
                <div className="position-relative mb-3">
                  <img 
                    className="w-100" 
                    src={post.image} 
                    alt="cover"
                  />
                  <div className="date-badge">
                    <div className="fw-bold lh-1">{post.day}</div>
                    <small className="text-white-50">{post.month}</small>
                  </div>
                </div>

                <div className="small mb-2">
                  <Link href="#" className="link-primary text-decoration-none">{post.category}</Link>
                  <span className="mx-2 text-muted">•</span>
                  <Link href="#" className="link-primary text-decoration-none">Share({post.shareCount})</Link>
                </div>

                <h5 className="">{post.title}</h5>
                <p className="text-muted">
                  {post.description}
                </p>

                <Link href="/blog-detail" className="btn btn-dark w-100 rounded-pill py-3">Read This Blog</Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;