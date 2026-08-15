import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, y = 20, className }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      animate={shouldReduceMotion || inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({ children, className, as = "a", strength = 0.35, ...props }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const Comp = motion[as] || motion.a;

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(useMotionValue(-500), { stiffness: 120, damping: 24, mass: 0.6 });
  const y = useSpring(useMotionValue(-500), { stiffness: 120, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: x, top: y }}
      className="pointer-events-none fixed z-30 hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-multiply blur-[60px] lg:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,var(--violet-200),transparent_65%)]" />
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-violet-700 via-violet-400 to-violet-200"
    />
  );
}

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden mesh-bg">
      <div className="islamic-pattern absolute inset-0" />
      <motion.div
        className="absolute -left-40 top-[-10%] h-[380px] w-[380px] rounded-full bg-violet-300/45 blur-[90px] will-change-transform sm:h-[520px] sm:w-[520px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-15%] top-1/3 h-[400px] w-[400px] rounded-full bg-violet-200/50 blur-[90px] will-change-transform sm:h-[560px] sm:w-[560px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-1/3 hidden h-[600px] w-[600px] rounded-full bg-violet-400/25 blur-[120px] will-change-transform sm:block"
        animate={{ x: [0, 40, 0], y: [0, -50, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <Particles />
    </div>
  );
}

function Particles() {
  const [dots, setDots] = useState([]);
  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    setDots(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 5,
        dur: 12 + Math.random() * 16,
        delay: Math.random() * 8,
      })),
    );
  }, []);
  return (
    <>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-violet-500/25"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size }}
          animate={{ y: [0, -60, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

export function Section({ id, children, className, full = true }) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24 lg:px-10",
        full && "flex min-h-screen flex-col justify-center",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-white/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-700 backdrop-blur sm:px-4 sm:text-[11px]">
      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
      {children}
    </span>
  );
}

export function GlassCard({ children, className, tilt = false }) {
  const ref = useRef(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  function onMove(e) {
    if (!tilt || !ref.current) return;
    if (window.innerWidth < 1024) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={cn("glass-panel rounded-[28px]", className)}
    >
      {children}
    </motion.div>
  );
}

export function useParallax(distance = 60) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yValue = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return { ref, y: yValue };
}
