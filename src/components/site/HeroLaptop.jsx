import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import laptop from "@/assets/laptop-hero.png";

const orbiters = [
  { label: "React", cls: "left-[-4%] top-[16%]", dur: 6, dot: "bg-sky-500", hideSm: false },
  { label: "Tailwind", cls: "right-[-4%] top-[8%]", dur: 7.5, dot: "bg-cyan-500", hideSm: false },
  { label: "Figma", cls: "left-[2%] bottom-[6%]", dur: 8.5, dot: "bg-violet-700", hideSm: true },
  { label: "GitHub", cls: "right-[0%] bottom-[12%]", dur: 6.8, dot: "bg-ink", hideSm: true },
];

export default function HeroLaptop() {
  const wrap = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 90, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 90, damping: 18 });

  function onMove(e) {
    if (window.innerWidth < 1024) return;
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative mx-auto w-full max-w-[300px] px-6 py-10 sm:max-w-[380px] sm:px-10 lg:max-w-[460px] lg:py-14"
    >
      {/* thin dotted orbital rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex"
      >
        <motion.div
          className="absolute aspect-square w-[112%] rounded-full border border-dashed border-violet-400/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute aspect-square w-[86%] rounded-full border border-dotted border-violet-300/35"
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* soft lavender glow behind the laptop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/45 blur-[70px]" />

      <motion.div
        style={{ rotateY: rotY, rotateX: rotX, transformPerspective: 1200, willChange: "transform" }}
        animate={{ y: [0, -14, 0], rotate: [-1.2, 1.2, -1.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <img
          src={laptop}
          alt="Floating 3D MacBook displaying the Locafii family safety landing page"
          width={1536}
          height={1024}
          className="relative z-10 w-full select-none drop-shadow-[0_36px_54px_rgba(132,94,194,0.32)]"
        />
      </motion.div>

      {/* soft ground shadow */}
      <motion.div
        aria-hidden
        animate={{ scaleX: [1, 0.9, 1], opacity: [0.4, 0.25, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto h-6 w-[55%] -translate-y-4 rounded-[100%] bg-violet-700/25 blur-2xl"
      />

      {orbiters.map((o, i) => (
        <motion.div
          key={o.label}
          className={`absolute z-20 ${o.cls} ${o.hideSm ? "hidden sm:block" : ""}`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          <div className="glass-panel flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[10px] font-medium text-ink shadow-lg sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2 sm:text-xs">
            <span className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${o.dot}`} />
            {o.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
