import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

import {
  Background,
  CursorGlow,
  Eyebrow,
  GlassCard,
  MagneticButton,
  Reveal,
  ScrollProgress,
  Section,
} from "@/components/site/ui";
import HeroLaptop from "@/components/site/HeroLaptop";
import aboutPortrait from "@/assets/about.png";
import projLocafii from "@/assets/laptop-locafii-site.png";
import laptopPos from "@/assets/laptop-pos-site.png";
import laptopVerde from "@/assets/laptop-verde.png";

const EMAIL = "haniamansoor434@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const LINKEDIN = "https://www.linkedin.com/in/hania-mansoor-6a4587317";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const STATS = [
  { value: "3+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "12", label: "Happy clients" },
  { value: "100%", label: "On-time delivery" },
];

const STACK = [
  { group: "Languages", items: ["JavaScript", "JSX", "HTML", "CSS"] },
  { group: "Frameworks", items: ["React 19", "Next.js", "TanStack"] },
  { group: "Backend", items: ["Node.js", "Express", "Firebase"] },
  { group: "Tooling", items: ["Vite", "Bun", "Git", "Figma"] },
];

const PROJECTS = [
  {
    n: "01",
    title: "Locafii",
    tag: "Family safety platform",
    image: projLocafii,
    url: "https://locafii-landingpage.vercel.app/",
    blurb:
      "A real-time family GPS tracking product with live maps, location sharing and instant safety alerts — private, secure and free.",
    stack: ["React", "TypeScript", "Firebase", "Mapbox"],
  },
  {
    n: "02",
    title: "Grocery POS",
    tag: "Point of sale",
    image: laptopPos,
    url: "https://grocery-shop-fawn.vercel.app",
    blurb:
      "A fast checkout and employee dashboard with billing, customer history, receipts and live sales stats for neighbourhood stores.",
    stack: ["Next.js", "Tailwind", "Node.js", "Express"],
  },
  {
    n: "03",
    title: "VERDE",
    tag: "Plants & flowers store",
    image: laptopVerde,
    url: "https://plants-store-eta.vercel.app/",
    blurb:
      "An editorial plant and flower storefront with curated collections, wishlist and cart — warm, botanical and calm to browse.",
    stack: ["React", "Tailwind", "Node.js", "Express"],
  },
];

const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "Independent Full Stack Developer",
    text: "Building web interfaces for founders and studios.",
  },
  {
    period: "2024 — 2025",
    role: "Freelance, Pakistan",
    text: "Shipped POS, safety and mapping products for three local clients.",
    highlight: true,
  },
  {
    period: "2023 — 2024",
    role: "Full Stack Developer, Product Studio",
    text: "Shipped design systems and component libraries across three client products.",
  },
];

const EDUCATION = [
  {
    degree: "BS Computer Science",
    org: "Kohat University of Science & Technology (KUST)",
    period: "2022 — 2026",
    text: "Focused on human-computer interaction, web engineering and software design.",
  },
  {
    degree: "Advanced UI Engineering",
    org: "Self-directed study",
    period: "2024 — 2026",
    text: "Deep work on motion design, accessibility and modern React architecture.",
  },
];

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:px-4">
      <div className="w-full max-w-5xl">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="nav-glass flex w-full items-center gap-2 rounded-full p-1.5 pl-3 sm:pl-4"
        >
          <a
            href="#home"
            className="flex min-w-0 shrink items-center gap-2.5 pr-2 md:hidden lg:flex"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-700 to-violet-400 font-serif text-base font-bold text-white shadow-[0_10px_24px_-12px_rgba(132,94,194,0.9)]">
              H
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-serif text-sm font-semibold tracking-tight text-ink">
                Hania Mansoor
              </span>
              <span className="block truncate font-mono text-[10px] uppercase tracking-[0.16em] text-muted-ink">
                Full Stack Developer
              </span>
            </span>
          </a>

          {/* desktop / tablet links */}
          <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="relative shrink-0 rounded-full px-3 py-2 text-[13px] font-medium text-muted-ink transition-colors hover:text-violet-700 sm:px-3.5"
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-violet-200/60"
                  />
                )}
                <span
                  className={`relative z-10 ${active === n.id ? "font-semibold text-violet-700" : ""}`}
                >
                  {n.label}
                </span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="ml-auto hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-violet-400 py-2.5 pl-5 pr-2.5 text-[13px] font-medium text-white shadow-[0_14px_32px_-16px_rgba(132,94,194,1)] transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            Let&apos;s Talk
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>

          {/* mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border border-violet-300/60 bg-white/70 text-violet-700 transition-colors hover:bg-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="nav-glass mt-2 rounded-[26px] p-3 md:hidden"
            >
              <div className="grid gap-1">
                {NAV.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors ${
                      active === n.id
                        ? "bg-violet-200/60 font-semibold text-violet-700"
                        : "text-muted-ink hover:bg-white/60 hover:text-violet-700"
                    }`}
                  >
                    {n.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-700 to-violet-400 px-5 py-3 text-sm font-medium text-white"
              >
                Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Heading({ children, className = "" }) {
  return (
    <h2
      className={`font-serif font-semibold leading-[1.05] tracking-[-0.03em] text-ink ${className}`}
      style={{ fontSize: "clamp(1.8rem, 5.2vw, 3.6rem)" }}
    >
      {children}
    </h2>
  );
}

function ProjectCard({ p, i }) {
  const flipped = i % 2 === 1;
  return (
    <Reveal delay={0.05 * i}>
      <div className="group relative rounded-[32px] p-[1px] transition-transform duration-500 hover:-translate-y-1.5">
        <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(120deg,#845ec2,#be93fd,#faccff,#845ec2)] bg-[length:200%_100%] opacity-40 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />
        <GlassCard tilt className="relative overflow-hidden rounded-[31px] p-4 sm:p-6 lg:p-8">
          <div
            className={`grid items-center gap-6 sm:gap-8 lg:grid-cols-2 ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[20px] border border-white/60 bg-white/40 sm:max-w-[440px] lg:max-w-none lg:rounded-[24px]">
              <picture>
                {p.imageMobile && <source media="(max-width: 639px)" srcSet={p.imageMobile} />}
                <img
                  src={p.image}
                  alt={`${p.title} interface preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                />
              </picture>
            </div>

            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-700">
                <span>{p.n}</span>
                <span className="h-px w-8 bg-violet-300" />
                <span>{p.tag}</span>
              </div>
              <h3
                className="mt-4 font-serif font-semibold tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(1.45rem, 3.2vw, 2.4rem)" }}
              >
                {p.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-ink">{p.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-violet-300/60 bg-white/70 px-3 py-1 text-xs font-medium text-violet-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <MagneticButton
                  href={p.url || "#contact"}
                  target={p.url ? "_blank" : undefined}
                  rel={p.url ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-violet-400 px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_-12px_rgba(132,94,194,0.9)]"
                >
                  Live preview <ExternalLink className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  href={GMAIL_COMPOSE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/70 px-5 py-2.5 text-sm font-medium text-ink"
                >
                  Discuss project <Mail className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </Reveal>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-ink">
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      {/* HERO */}
      <Section id="home" className="pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[85%] bg-[radial-gradient(60%_55%_at_72%_38%,oklch(0.82_0.116_308/38%)_0%,transparent_70%)] blur-[10px]"
        />
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <Reveal>
              <Eyebrow>Hania Mansoor — Pakistan</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="mt-7 font-serif font-bold leading-[0.98] tracking-[-0.04em] text-ink"
                style={{ fontSize: "clamp(2.15rem, 6.8vw, 5rem)" }}
              >
                Effortless
                <br />
                <span className="text-gradient-teal">interfaces.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-muted-ink sm:text-lg">
                Full stack developer and interface designer crafting premium, precise and quietly
                beautiful digital products.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-violet-500 to-violet-400 px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_44px_-16px_rgba(132,94,194,0.95)] transition-shadow hover:shadow-[0_22px_60px_-14px_rgba(132,94,194,1)]"
                >
                  View my work <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/70 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur"
                >
                  Get in touch <Mail className="h-4 w-4" />
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-ink">
                <MapPin className="h-3.5 w-3.5 text-violet-500" /> Available for freelance
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={40} className="hidden lg:block">
            <HeroLaptop />
          </Reveal>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <Reveal>
          <Eyebrow>About</Eyebrow>
        </Reveal>
        <div className="mt-8 grid items-start gap-5 sm:gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <Reveal className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none">
            <div className="group relative">
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-[28px] bg-[conic-gradient(from_0deg,#845ec2,#be93fd,#faccff,#845ec2)] opacity-60 blur-[10px] sm:rounded-[36px]"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[20px] border border-white/70 shadow-[0_30px_60px_-40px_rgba(132,94,194,0.9)] sm:rounded-[28px]"
              >
                <img
                  src={aboutPortrait}
                  alt="Portrait of Hania Mansoor"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={912}
                  height={1200}
                  className="aspect-square h-auto w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-700/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <Heading>Designing calm, building precise.</Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-ink sm:text-base">
                I&apos;m Hania — a full stack developer from Pakistan who cares about the small
                things: the weight of a heading, the ease of a transition, the moment a page feels
                effortless. I design and build interfaces end-to-end, blending an editorial eye with
                clean, maintainable React.
              </p>
            </Reveal>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i}>
                  <GlassCard className="rounded-3xl p-5 text-center">
                    <div className="font-serif text-3xl font-semibold text-violet-700">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-ink">{s.label}</div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* STACK */}
      <Section id="stack">
        <Reveal>
          <Eyebrow>Stack</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <Heading className="mt-5 max-w-2xl">The tools I build with.</Heading>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 h-px w-full bg-gradient-to-r from-violet-400/60 to-transparent" />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {STACK.map((s, i) => (
            <Reveal key={s.group} delay={0.06 * i}>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-500 sm:text-[11px]">
                  {s.group}
                </div>
                <ul className="mt-5 space-y-3">
                  {s.items.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-sm text-ink transition-colors duration-300 hover:text-violet-700 sm:text-base"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" className="gap-12">
        <div>
          <Reveal>
            <Eyebrow>Selected work</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <Heading className="mt-6 max-w-2xl">Products people actually enjoy using.</Heading>
          </Reveal>
        </div>
        <div className="mt-12 space-y-10">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <Heading className="mt-6 max-w-2xl">Where I&apos;ve been building.</Heading>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 h-px w-full bg-gradient-to-r from-violet-400/60 to-transparent" />
        </Reveal>
        <div className="mt-4 divide-y divide-violet-300/30">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={0.06 * i}>
              <div
                className={`grid gap-2 rounded-[24px] px-3 py-7 transition-colors duration-300 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6 sm:px-5 lg:grid-cols-[140px_minmax(0,1.1fr)_minmax(0,1fr)] ${
                  e.highlight ? "bg-violet-200/25" : "hover:bg-white/40"
                }`}
              >
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-ink">
                  <Briefcase className="h-3.5 w-3.5 shrink-0 text-violet-500 sm:hidden" />
                  {e.period}
                </div>
                <h3
                  className={`min-w-0 font-serif font-semibold leading-tight tracking-[-0.02em] ${
                    e.highlight ? "text-violet-700" : "text-ink"
                  }`}
                  style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
                >
                  {e.role}
                </h3>
                <p className="min-w-0 text-sm leading-relaxed text-muted-ink lg:pt-1">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education">
        <Reveal>
          <Eyebrow>Education</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <Heading className="mt-6 max-w-2xl">Foundations and continued study.</Heading>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={0.06 * i}>
              <GlassCard tilt className="h-full rounded-[28px] p-7">
                <GraduationCap className="h-6 w-6 text-violet-700" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">{e.degree}</h3>
                <div className="mt-1 text-sm font-medium text-violet-500">{e.org}</div>
                <div className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-ink">
                  {e.period}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-ink">{e.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <GlassCard className="rounded-[36px] p-8 text-center sm:p-14">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mx-auto mt-7 max-w-3xl font-serif font-bold leading-[1.02] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(1.9rem, 5.6vw, 4.1rem)" }}
            >
              Let&apos;s build something <span className="text-gradient-teal">beautiful.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted-ink">
              Available for freelance projects and collaborations. Tell me what you&apos;re making —
              I&apos;ll reply within a day.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MagneticButton
                href={GMAIL_COMPOSE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-violet-500 to-violet-400 px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_44px_-16px_rgba(132,94,194,0.95)]"
              >
                {EMAIL} <Mail className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/70 px-7 py-3.5 text-sm font-medium text-ink"
              >
                LinkedIn <Linkedin className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </GlassCard>
      </Section>

      {/* FOOTER */}
      <footer className="relative mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-10">
        <GlassCard className="rounded-[28px] px-6 py-7 sm:px-9">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="font-serif text-lg font-semibold tracking-tight text-ink">
              Hania Mansoor
            </div>
            <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted-ink">
              {NAV.slice(1, 5).map((n) => (
                <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-violet-700">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, href: LINKEDIN, label: "LinkedIn profile" },
                { Icon: Mail, href: GMAIL_COMPOSE, label: "Email Hania" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-violet-300/60 bg-white/70 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 border-t border-violet-300/40 pt-5 text-center text-xs text-muted-ink">
            © {new Date().getFullYear()} Hania Mansoor · Designed &amp; built in Pakistan
          </div>
        </GlassCard>
      </footer>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hania Mansoor" },
      {
        name: "description",
        content:
          "Portfolio of Hania Mansoor, a Pakistan-based full stack developer and interface designer crafting premium, precise and effortless digital products.",
      },
      { property: "og:title", content: "Hania Mansoor" },
      {
        property: "og:description",
        content:
          "Full stack React and Node work: dashboards, product interfaces and marketing sites built with craft and motion.",
      },

      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: aboutPortrait, type: "image/jpeg" }],
  }),
  component: Portfolio,
});
