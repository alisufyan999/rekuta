'use client';

import React, { useMemo, useState } from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  remote: 'Remote' | 'Hybrid' | 'Onsite';
  specialisation: string;
  jobType: 'Full Time' | 'Part Time' | 'Contract' | 'Internship';
  postedAt: string;
  timeAgo: string;
  salary: string;
  note: string;
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
  const [q, setQ] = useState('');
  const [where, setWhere] = useState('');
  const [remote, setRemote] = useState<string>('');
  const [spec, setSpec] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [datePosted, setDatePosted] = useState<string>('');
  const [submittedAt, setSubmittedAt] = useState<number>(0);
  const specs = useMemo(() => unique(JOBS, 'specialisation'), []);
  const jobTypes = useMemo(() => unique(JOBS, 'jobType'), []);
  const remoteModes = useMemo(
    () => unique(JOBS, 'remote') as Array<Job['remote']>,
    []
  );
  const filtered = useMemo(() => {
    void submittedAt;
    const now = new Date();
    const maxAgeDays =
      datePosted === '24h' ? 1 : datePosted === '7d' ? 7 : datePosted === '14d' ? 14 : datePosted === '30d' ? 30 : null;
    return JOBS.filter((j) => {
      const text = (q || '').toLowerCase();
      const matchesText =
        !text ||
        `${j.title} ${j.company} ${j.specialisation}`.toLowerCase().includes(text);
      const w = (where || '').toLowerCase();
      const matchesWhere = !w || j.location.toLowerCase().includes(w);
      const matchesRemote = !remote || j.remote === remote;
      const matchesSpec = !spec || j.specialisation === spec;
      const matchesType = !type || j.jobType === type;
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
        <form className="joblisting-search row g-2 align-items-center mb-3" onSubmit={onSearch}>
          <div className="col-12 col-lg-4">
            <div className="input-group joblisting-input position-relative">
              <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass" style={{ color: "#142033" }}></i>
              </span>
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
            <div className="input-group joblisting-input position-relative">
              <span className="input-group-text">
                <i className="fa-solid fa-location-dot" style={{ color: "#000" }}></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="City, State, or Zip Code"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <button className="btn btn-primary btn-pill width-fit w-100 btnPadding" type="submit">
              Search
            </button>
          </div>
          <div className="col-12">
            <div className="d-flex flex-wrap gap-2 mt-2">
              <div className='d-flex align-items-center carrotIcon' style={{
                position: 'relative'
              }}>
                <select
                  className="form-select joblisting-pill"
                  value={remote}
                  onChange={(e) => setRemote(e.target.value)}
                  style={{ appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }}>
                  <option value="">Remote</option>
                  {remoteModes.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="carrotIcon">
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
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="carrotIcon">
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
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="carrotIcon">
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
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="carrotIcon">
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
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </form>
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
                  <li className='d-flex gap-1 align-items-center'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.313 22.167c5.522 0 10-4.478 10-10s-4.478-10-10-10-10 4.477-10 10 4.477 10 10 10Z" stroke="#0E4DC7" /><path d="M12.313 8.167v4l2.5 2.5" stroke="#0E4DC7" /></svg>
                    {job.timeAgo}
                  </li>
                  <li className='d-flex gap-1 align-items-center'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.313 22.167c5.522 0 10-4.478 10-10s-4.478-10-10-10-10 4.477-10 10 4.477 10 10 10Z" stroke="#0E4DC7" /><path d="M12.313 17.167v1m0-1c1.656 0 3-1.12 3-2.5s-1.344-2.5-3-2.5c-1.658 0-3-1.12-3-2.5s1.342-2.5 3-2.5m0 10c-1.658 0-3-1.12-3-2.5m3-8.5v1m0 0c1.656 0 3 1.12 3 2.5" stroke="#0E4DC7" /></svg>
                    {job.salary}
                  </li>
                  <li className='d-flex gap-1 align-items-center'>
                    <svg width="25" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.146 10.31c0-4.9 3.405-8.893 7.629-8.893s7.628 3.994 7.628 8.893c0 2.365-.588 4.905-1.627 7.099-1.037 2.19-2.552 4.095-4.449 5.112a3.3 3.3 0 0 1-1.552.396 3.3 3.3 0 0 1-1.553-.396c-1.896-1.017-3.411-2.92-4.449-5.112-1.039-2.194-1.627-4.734-1.627-7.1m7.629-7.393c-3.48 0-6.32 3.297-6.32 7.393 0 2.097.525 4.392 1.467 6.383.944 1.993 2.277 3.624 3.854 4.469.312.168.653.255.998.255s.686-.087.999-.255c1.577-.845 2.91-2.476 3.854-4.47.943-1.99 1.468-4.285 1.468-6.382 0-4.096-2.84-7.393-6.32-7.393m0 5c-.258 0-.513.058-.751.171a2 2 0 0 0-.636.488 2.3 2.3 0 0 0-.426.73 2.54 2.54 0 0 0 0 1.722c.099.273.244.52.426.73s.398.374.636.487c.238.114.493.172.75.172.52 0 1.02-.237 1.388-.66.368-.421.574-.994.574-1.59s-.206-1.17-.574-1.591-.867-.66-1.387-.66m-3.27 2.25c0-.995.345-1.949.958-2.652s1.445-1.098 2.312-1.098 1.698.395 2.311 1.098c.614.703.958 1.657.958 2.652 0 .994-.344 1.948-.958 2.651-.613.704-1.444 1.099-2.311 1.099s-1.699-.395-2.312-1.099c-.613-.703-.958-1.657-.958-2.651" fill="#0E4DC7" /></svg>
                    {job.remote}
                  </li>
                  <li className='d-flex gap-1 align-items-center'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.313 8.167v-2c0-1.886 0-2.828-.586-3.414-.587-.586-1.529-.586-3.415-.586h-2c-1.885 0-2.827 0-3.413.586s-.586 1.528-.586 3.414v2m4.146 4.023c.38-.682.57-1.023.854-1.023s.473.34.853 1.023l.098.176c.109.194.163.29.247.354.085.064.19.088.4.135l.19.044c.737.167 1.106.25 1.194.532s-.163.577-.666 1.165l-.13.152c-.144.167-.216.25-.248.354-.031.104-.02.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.575.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136-.103 0-.201.046-.398.136l-.178.082c-.692.319-1.038.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.02-.223.031-.334 0-.438-.033-.104-.104-.187-.248-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.316-.07.4-.135.084-.064.138-.16.246-.354z" stroke="#0E4DC7" /><path d="M12.313 22.167a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="#0E4DC7" /></svg>
                    {job.note}
                  </li>
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
