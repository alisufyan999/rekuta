'use client';

import React, { useMemo, useState } from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;          // City, State or Zip
  remote: 'Remote' | 'Hybrid' | 'Onsite';
  specialisation: string;
  jobType: 'Full Time' | 'Part Time' | 'Contract' | 'Internship';
  postedAt: string;          // ISO date
  timeAgo: string;           // for display (e.g., "20 Hours Ago")
  salary: string;            // "$3.00 - $4.00"
  note: string;              // "Actively Recruiting"
};

const JOBS: Job[] = [
    {
      id: 1,
      title: 'Senior Front End Developer',
      company: 'Acme Studio',
      location: 'New York, NY 10001',
      remote: 'Remote',
      specialisation: 'Frontend',
      jobType: 'Full Time',
      postedAt: '2025-09-20',
      timeAgo: '20 Hours Ago',
      salary: '$3.00 - $4.00',
      note: 'Actively Recruiting',
    },
    {
      id: 2,
      title: 'React Native Engineer',
      company: 'Beta Labs',
      location: 'San Francisco, CA 94107',
      remote: 'Hybrid',
      specialisation: 'Mobile',
      jobType: 'Full Time',
      postedAt: '2025-09-18',
      timeAgo: '2 Days Ago',
      salary: '$3.20 - $4.20',
      note: 'Urgent Hiring',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Gamma Co',
      location: 'Austin, TX 73301',
      remote: 'Remote',
      specialisation: 'Design',
      jobType: 'Contract',
      postedAt: '2025-09-15',
      timeAgo: '5 Days Ago',
      salary: '$2.80 - $3.80',
      note: 'Portfolio Required',
    },
    {
      id: 4,
      title: 'Backend Node.js Developer',
      company: 'Delta Works',
      location: 'Chicago, IL 60601',
      remote: 'Onsite',
      specialisation: 'Backend',
      jobType: 'Full Time',
      postedAt: '2025-09-10',
      timeAgo: '1 Week Ago',
      salary: '$3.10 - $4.10',
      note: 'Visa Sponsorship',
    },
    {
      id: 5,
      title: 'Full-Stack Engineer (React + Node)',
      company: 'Omega Group',
      location: 'Miami, FL 33101',
      remote: 'Remote',
      specialisation: 'Fullstack',
      jobType: 'Part Time',
      postedAt: '2025-09-05',
      timeAgo: '2 Weeks Ago',
      salary: '$2.50 - $3.20',
      note: 'Flexible Hours',
    },
    {
      id: 6,
      title: 'Product Designer',
      company: 'Zeta Digital',
      location: 'Seattle, WA 98101',
      remote: 'Hybrid',
      specialisation: 'Design',
      jobType: 'Full Time',
      postedAt: '2025-09-01',
      timeAgo: '3 Weeks Ago',
      salary: '$3.40 - $4.40',
      note: 'Actively Recruiting',
    },
  ];  

const unique = <K extends keyof Job>(arr: Job[], key: K) =>
  Array.from(new Set(arr.map((j) => j[key]))).filter(Boolean) as string[];

const JobListings: React.FC = () => {
  // form state
  const [q, setQ] = useState('');
  const [where, setWhere] = useState('');
  const [remote, setRemote] = useState<string>('');          // Remote/Hybrid/Onsite
  const [spec, setSpec] = useState<string>('');              // Specialisation
  const [type, setType] = useState<string>('');              // Job Type
  const [datePosted, setDatePosted] = useState<string>('');  // any / 24h / 7d / 14d / 30d

  const [submittedAt, setSubmittedAt] = useState<number>(0); // click to trigger filtering

  const specs = useMemo(() => unique(JOBS, 'specialisation'), []);
  const jobTypes = useMemo(() => unique(JOBS, 'jobType'), []);
  const remoteModes = useMemo(
    () => unique(JOBS, 'remote') as Array<Job['remote']>,
    []
  );

  const filtered = useMemo(() => {
    // re-compute when the user hits Search
    void submittedAt;

    const now = new Date();
    const maxAgeDays =
      datePosted === '24h' ? 1 : datePosted === '7d' ? 7 : datePosted === '14d' ? 14 : datePosted === '30d' ? 30 : null;

    return JOBS.filter((j) => {
      // text search in title/company/specialisation
      const text = (q || '').toLowerCase();
      const matchesText =
        !text ||
        `${j.title} ${j.company} ${j.specialisation}`.toLowerCase().includes(text);

      // location match
      const w = (where || '').toLowerCase();
      const matchesWhere = !w || j.location.toLowerCase().includes(w);

      // remote filter
      const matchesRemote = !remote || j.remote === remote;

      // spec filter
      const matchesSpec = !spec || j.specialisation === spec;

      // type filter
      const matchesType = !type || j.jobType === type;

      // posted date window
      const matchesDate =
        !maxAgeDays ||
        (now.getTime() - new Date(j.postedAt).getTime()) / (1000 * 60 * 60 * 24) <=
          maxAgeDays;

      return (
        matchesText &&
        matchesWhere &&
        matchesRemote &&
        matchesSpec &&
        matchesType &&
        matchesDate
      );
    });
  }, [submittedAt, q, where, remote, spec, type, datePosted]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedAt(Date.now());
  };

  const resetFilters = () => {
    setQ('');
    setWhere('');
    setRemote('');
    setSpec('');
    setType('');
    setDatePosted('');
    setSubmittedAt(Date.now());
  };

  return (
    <section className="joblisting-section section-padding pt-0">
        <div className="container">
            {/* Search Row */}
            <form className="joblisting-search row g-2 align-items-center mb-3" onSubmit={onSearch}>
                    <div className="col-12 col-lg-4">
                    <div className="input-group joblisting-input">
                        <span className="input-group-text">🔎</span>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Job Title, Skills, or Keywords"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="col-12 col-lg-4">
                    <div className="input-group joblisting-input">
                        <span className="input-group-text">📍</span>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="City, State, or Zip Code"
                        value={where}
                        onChange={(e) => setWhere(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="col-12 col-lg-2">
                    <button className="btn btn-primary btn-pill width-fit w-100" type="submit">
                        Search
                    </button>
                    </div>

                    <div className="col-12 col-lg-2">
                    <button className="btn btn-outline-secondary w-100" type="button" onClick={resetFilters}>
                        Reset
                    </button>
                    </div>

                    {/* Filter pills */}
                    <div className="col-12">
                    <div className="d-flex flex-wrap gap-2 mt-2">
                        {/* Remote */}
                        <select
                        className="form-select joblisting-pill"
                        value={remote}
                        onChange={(e) => setRemote(e.target.value)}
                        >
                        <option value="">Remote</option>
                        {remoteModes.map((m) => (
                            <option key={m} value={m}>
                            {m}
                            </option>
                        ))}
                        </select>

                        {/* Location quick-fill (optional helper; still uses text field) */}
                        <select
                        className="form-select joblisting-pill"
                        onChange={(e) => setWhere(e.target.value)}
                        value=""
                        >
                        <option value="">Location</option>
                        {Array.from(new Set(JOBS.map((j) => j.location))).map((loc) => (
                            <option key={loc} value={loc}>
                            {loc}
                            </option>
                        ))}
                        </select>

                        {/* Specialisation */}
                        <select
                        className="form-select joblisting-pill"
                        value={spec}
                        onChange={(e) => setSpec(e.target.value)}
                        >
                        <option value="">Specialisation</option>
                        {specs.map((s) => (
                            <option key={s} value={s}>
                            {s}
                            </option>
                        ))}
                        </select>

                        {/* Job Type */}
                        <select
                        className="form-select joblisting-pill"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        >
                        <option value="">Job Type</option>
                        {jobTypes.map((t) => (
                            <option key={t} value={t}>
                            {t}
                            </option>
                        ))}
                        </select>

                        {/* Date Posted */}
                        <select
                        className="form-select joblisting-pill"
                        value={datePosted}
                        onChange={(e) => setDatePosted(e.target.value)}
                        >
                        <option value="">Date Posted</option>
                        <option value="24h">Last 24 hours</option>
                        <option value="7d">Last 7 days</option>
                        <option value="14d">Last 14 days</option>
                        <option value="30d">Last 30 days</option>
                        </select>
                    </div>
                    </div>
                </form>

                {/* Results grid */}
                <div className="row g-4">
                    {filtered.map((job) => (
                    <div className="col-12 col-md-6" key={job.id}>
                        <article className="joblisting-card p-4 rounded-4 h-100">
                        <div className="d-flex align-items-start justify-content-between mb-2">
                            <span className="badge joblisting-badge">{job.jobType}</span>
                            <button className="btn btn-sm joblisting-save" type="button" aria-label="save">
                            ♡
                            </button>
                        </div>

                        <h5 className="joblisting-title mb-1">{job.title}</h5>
                        <p className="joblisting-sub mb-3">
                            Collaborate with back end developers to improve usability
                        </p>

                        <ul className="list-unstyled joblisting-meta mb-3">
                            <li>⏱ {job.timeAgo}</li>
                            <li>💰 {job.salary}</li>
                            <li>📍 {job.remote} Workly</li>
                            <li>🛡 {job.note}</li>
                        </ul>

                        <button className="btn joblisting-more">More Details</button>
                        </article>
                    </div>
                    ))}

                    {filtered.length === 0 && (
                    <div className="col-12">
                        <div className="alert alert-light border text-center">
                        No results match your filters.
                        </div>
                    </div>
                    )}
                </div>
        </div>
      
    </section>
  );
};

export default JobListings;
