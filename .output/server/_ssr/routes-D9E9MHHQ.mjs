import { a as __toESM } from "../_runtime.mjs";
import { a as useMotionValue, c as AnimatePresence, i as useTransform, n as useReducedMotion, o as useScroll, r as useSpring, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as about_default } from "./router-KMtzy_jk.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as Briefcase, a as ShieldCheck, c as MonitorSmartphone, d as Mail, f as Linkedin, g as Calculator, h as ExternalLink, i as ShoppingCart, l as Menu, m as GraduationCap, n as Users, o as ReceiptText, p as LayoutDashboard, r as UserCog, s as Package, t as X, u as MapPin, v as BadgeDollarSign, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9E9MHHQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, delay = 0, y = 20, className }) {
	const ref = (0, import_react.useRef)(null);
	const shouldReduceMotion = useReducedMotion();
	const inView = useInView(ref, {
		once: true,
		margin: "0px 0px -8% 0px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: shouldReduceMotion ? false : {
			opacity: 0,
			y
		},
		animate: shouldReduceMotion || inView ? {
			opacity: 1,
			y: 0
		} : void 0,
		transition: {
			duration: .46,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		style: { willChange: "transform, opacity" },
		className,
		children
	});
}
function MagneticButton({ children, className, as = "a", strength = .35, ...props }) {
	const ref = (0, import_react.useRef)(null);
	const x = useSpring(useMotionValue(0), {
		stiffness: 200,
		damping: 18
	});
	const y = useSpring(useMotionValue(0), {
		stiffness: 200,
		damping: 18
	});
	const Comp = motion[as] || motion.a;
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set((e.clientX - (r.left + r.width / 2)) * strength);
		y.set((e.clientY - (r.top + r.height / 2)) * strength);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: () => {
			x.set(0);
			y.set(0);
		},
		style: {
			x,
			y
		},
		whileHover: { scale: 1.04 },
		whileTap: { scale: .97 },
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20
		},
		className,
		...props,
		children
	});
}
function CursorGlow() {
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const x = useSpring(useMotionValue(-500), {
		stiffness: 120,
		damping: 24,
		mass: .6
	});
	const y = useSpring(useMotionValue(-500), {
		stiffness: 120,
		damping: 24,
		mass: .6
	});
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		style: {
			left: x,
			top: y
		},
		className: "pointer-events-none fixed z-30 hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-multiply blur-[60px] lg:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-full bg-[radial-gradient(circle,var(--violet-200),transparent_65%)]" })
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 26
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-violet-700 via-violet-400 to-violet-200"
	});
}
function Background() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden mesh-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "islamic-pattern absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -left-40 top-[-10%] h-[380px] w-[380px] rounded-full bg-violet-300/45 blur-[90px] will-change-transform sm:h-[520px] sm:w-[520px]",
				animate: {
					x: [
						0,
						60,
						0
					],
					y: [
						0,
						40,
						0
					]
				},
				transition: {
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute right-[-15%] top-1/3 h-[400px] w-[400px] rounded-full bg-violet-200/50 blur-[90px] will-change-transform sm:h-[560px] sm:w-[560px]",
				animate: {
					x: [
						0,
						-50,
						0
					],
					y: [
						0,
						60,
						0
					]
				},
				transition: {
					duration: 26,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute bottom-[-20%] left-1/3 hidden h-[600px] w-[600px] rounded-full bg-violet-400/25 blur-[120px] will-change-transform sm:block",
				animate: {
					x: [
						0,
						40,
						0
					],
					y: [
						0,
						-50,
						0
					]
				},
				transition: {
					duration: 32,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, {})
		]
	});
}
function Particles() {
	const [dots, setDots] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(max-width: 767px)").matches) return;
		setDots(Array.from({ length: 12 }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: 3 + Math.random() * 5,
			dur: 12 + Math.random() * 16,
			delay: Math.random() * 8
		})));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: dots.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		className: "absolute rounded-full bg-violet-500/25",
		style: {
			left: `${d.left}%`,
			top: `${d.top}%`,
			width: d.size,
			height: d.size
		},
		animate: {
			y: [
				0,
				-60,
				0
			],
			opacity: [
				0,
				.9,
				0
			]
		},
		transition: {
			duration: d.dur,
			delay: d.delay,
			repeat: Infinity,
			ease: "easeInOut"
		}
	}, d.id)) });
}
function Section({ id, children, className, full = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24 lg:px-10", full && "flex min-h-screen flex-col justify-center", className),
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-white/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-700 backdrop-blur sm:px-4 sm:text-[11px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-violet-500" }), children]
	});
}
function GlassCard({ children, className, tilt = false }) {
	const ref = (0, import_react.useRef)(null);
	const rx = useSpring(useMotionValue(0), {
		stiffness: 180,
		damping: 18
	});
	const ry = useSpring(useMotionValue(0), {
		stiffness: 180,
		damping: 18
	});
	function onMove(e) {
		if (!tilt || !ref.current) return;
		if (window.innerWidth < 1024) return;
		const r = ref.current.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		ry.set(px * 10);
		rx.set(-py * 10);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: () => {
			rx.set(0);
			ry.set(0);
		},
		style: tilt ? {
			rotateX: rx,
			rotateY: ry,
			transformPerspective: 1e3
		} : void 0,
		className: cn("glass-panel rounded-[28px]", className),
		children
	});
}
var laptop_hero_default = "/assets/laptop-hero-5Rs7Jo2-.png";
var orbiters = [
	{
		label: "React",
		cls: "left-[-4%] top-[16%]",
		dur: 6,
		dot: "bg-sky-500",
		hideSm: false
	},
	{
		label: "Tailwind",
		cls: "right-[-4%] top-[8%]",
		dur: 7.5,
		dot: "bg-cyan-500",
		hideSm: false
	},
	{
		label: "Figma",
		cls: "left-[2%] bottom-[6%]",
		dur: 8.5,
		dot: "bg-violet-700",
		hideSm: true
	},
	{
		label: "GitHub",
		cls: "right-[0%] bottom-[12%]",
		dur: 6.8,
		dot: "bg-ink",
		hideSm: true
	}
];
function HeroLaptop() {
	const wrap = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rotY = useSpring(useTransform(mx, [-.5, .5], [-8, 8]), {
		stiffness: 90,
		damping: 18
	});
	const rotX = useSpring(useTransform(my, [-.5, .5], [6, -6]), {
		stiffness: 90,
		damping: 18
	});
	function onMove(e) {
		if (window.innerWidth < 1024) return;
		const r = wrap.current?.getBoundingClientRect();
		if (!r) return;
		mx.set((e.clientX - r.left) / r.width - .5);
		my.set((e.clientY - r.top) / r.height - .5);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrap,
		onMouseMove: onMove,
		onMouseLeave: () => {
			mx.set(0);
			my.set(0);
		},
		className: "relative mx-auto w-full max-w-[300px] px-6 py-10 sm:max-w-[380px] sm:px-10 lg:max-w-[460px] lg:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute aspect-square w-[112%] rounded-full border border-dashed border-violet-400/25",
					animate: { rotate: 360 },
					transition: {
						duration: 90,
						repeat: Infinity,
						ease: "linear"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute aspect-square w-[86%] rounded-full border border-dotted border-violet-300/35",
					animate: { rotate: -360 },
					transition: {
						duration: 120,
						repeat: Infinity,
						ease: "linear"
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/45 blur-[70px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					rotateY: rotY,
					rotateX: rotX,
					transformPerspective: 1200,
					willChange: "transform"
				},
				animate: {
					y: [
						0,
						-14,
						0
					],
					rotate: [
						-1.2,
						1.2,
						-1.2
					]
				},
				transition: {
					duration: 9,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: laptop_hero_default,
					alt: "Floating 3D MacBook displaying the Locafii family safety landing page",
					width: 1536,
					height: 1024,
					className: "relative z-10 w-full select-none drop-shadow-[0_36px_54px_rgba(132,94,194,0.32)]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				animate: {
					scaleX: [
						1,
						.9,
						1
					],
					opacity: [
						.4,
						.25,
						.4
					]
				},
				transition: {
					duration: 9,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "mx-auto h-6 w-[55%] -translate-y-4 rounded-[100%] bg-violet-700/25 blur-2xl"
			}),
			orbiters.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: `absolute z-20 ${o.cls} ${o.hideSm ? "hidden sm:block" : ""}`,
				animate: { y: [
					0,
					-12,
					0
				] },
				transition: {
					duration: o.dur,
					repeat: Infinity,
					ease: "easeInOut",
					delay: i * .4
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[10px] font-medium text-ink shadow-lg sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2 sm:text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${o.dot}` }), o.label]
				})
			}, o.label))
		]
	});
}
var laptop_locafii_site_default = "/assets/laptop-locafii-site-BF6wyKqP.png";
var laptop_pos_site_default = "/assets/laptop-pos-site-CB5yRTb9.png";
var laptop_verde_default = "/assets/laptop-verde-BnyepkO1.png";
var EMAIL = "haniamansoor434@gmail.com";
var GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
var LINKEDIN = "https://www.linkedin.com/in/hania-mansoor-6a4587317";
var NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "stack",
		label: "Stack"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var STATS = [
	{
		value: "3+",
		label: "Years building"
	},
	{
		value: "20+",
		label: "Projects shipped"
	},
	{
		value: "12",
		label: "Happy clients"
	},
	{
		value: "100%",
		label: "On-time delivery"
	}
];
var STACK = [
	{
		group: "Languages",
		items: [
			"TypeScript",
			"JavaScript",
			"HTML",
			"CSS"
		]
	},
	{
		group: "Frameworks",
		items: [
			"React 19",
			"Next.js",
			"TanStack"
		]
	},
	{
		group: "Backend",
		items: [
			"Node.js",
			"Express",
			"Firebase"
		]
	},
	{
		group: "Tooling",
		items: [
			"VS Code",
			"Git",
			"GitHub",
			"Vite",
			"npm",
			"Figma"
		]
	}
];
var PROJECTS = [
	{
		n: "01",
		title: "Locafii",
		tag: "Family safety platform",
		image: laptop_locafii_site_default,
		url: "https://locafii-landingpage.vercel.app/",
		blurb: "A real-time family GPS tracking product with live maps, location sharing and instant safety alerts — private, secure and free.",
		stack: [
			"React",
			"TypeScript",
			"Firebase",
			"Mapbox"
		]
	},
	{
		n: "02",
		title: "Smart Grocery POS",
		tag: "Point of sale",
		image: laptop_pos_site_default,
		details: "grocery-pos",
		blurb: "A fast checkout and employee dashboard with billing, customer history, receipts and live sales stats for neighbourhood stores.",
		stack: [
			"React",
			"JavaScript",
			"Tailwind CSS",
			"Firebase"
		]
	},
	{
		n: "03",
		title: "VERDE",
		tag: "Plants & flowers store",
		image: laptop_verde_default,
		url: "https://plants-store-eta.vercel.app/",
		blurb: "An editorial plant and flower storefront with curated collections, wishlist and cart — warm, botanical and calm to browse.",
		stack: [
			"React",
			"Tailwind",
			"Node.js",
			"Express"
		]
	}
];
var GROCERY_FEATURES = [
	{
		title: "POS Billing",
		Icon: ShoppingCart,
		text: "Quickly search and add products to the cart, manage quantities, calculate totals, and process customer payments."
	},
	{
		title: "Product Management",
		Icon: Package,
		text: "Manage grocery products, prices, stock information, and product details from the system."
	},
	{
		title: "Pricing Tiers",
		Icon: BadgeDollarSign,
		text: "Support different pricing options such as Standard, Premium, and Gold pricing."
	},
	{
		title: "Customer Management",
		Icon: Users,
		text: "Add and manage customer information during the billing process."
	},
	{
		title: "Admin Dashboard",
		Icon: LayoutDashboard,
		text: "A dedicated admin section for managing products, users, inventory, and overall system operations."
	},
	{
		title: "Employee Panel",
		Icon: UserCog,
		text: "A simple and focused interface that allows employees to efficiently handle daily billing and customer transactions."
	},
	{
		title: "Cart Management",
		Icon: Calculator,
		text: "Add, remove, and update products with automatic subtotal and total calculations."
	},
	{
		title: "Receipts",
		Icon: ReceiptText,
		text: "Support for generating and managing customer receipts."
	},
	{
		title: "Authentication",
		Icon: ShieldCheck,
		text: "Secure login and user access management for administrators and employees."
	},
	{
		title: "Responsive Design",
		Icon: MonitorSmartphone,
		text: "The interface is designed to work smoothly across desktop, tablet, and mobile devices."
	}
];
var GROCERY_TECH_STACK = [{
	group: "Frontend",
	items: [
		"React",
		"JavaScript",
		"Tailwind CSS"
	]
}, {
	group: "Backend / Services",
	items: [
		"Firebase Authentication",
		"Firebase Firestore",
		"Firebase"
	]
}];
var EXPERIENCE = [
	{
		period: "2025 — Present",
		role: "Independent Full Stack Developer",
		text: "Building web interfaces for founders and studios."
	},
	{
		period: "2024 — 2025",
		role: "Freelance, Pakistan",
		text: "Shipped POS, safety and mapping products for three local clients.",
		highlight: true
	},
	{
		period: "2023 — 2024",
		role: "Full Stack Developer, Product Studio",
		text: "Shipped design systems and component libraries across three client products."
	}
];
var EDUCATION = [{
	degree: "BS Computer Science",
	org: "Kohat University of Science & Technology (KUST)",
	period: "2022 — 2026",
	text: "Focused on human-computer interaction, web engineering and software design."
}, {
	degree: "Advanced UI Engineering",
	org: "Self-directed study",
	period: "2024 — 2026",
	text: "Deep work on motion design, accessibility and modern React architecture."
}];
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, { rootMargin: "-45% 0px -50% 0px" });
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
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const close = () => setOpen(false);
		window.addEventListener("resize", close);
		return () => window.removeEventListener("resize", close);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
				initial: {
					y: -30,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .8,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "nav-glass flex w-full items-center gap-2 rounded-full p-1.5 pl-3 sm:pl-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex min-w-0 shrink items-center gap-2.5 pr-2 md:hidden lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-700 to-violet-400 font-serif text-base font-bold text-white shadow-[0_10px_24px_-12px_rgba(132,94,194,0.9)]",
							children: "H"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-serif text-sm font-semibold tracking-tight text-ink",
								children: "Hania Mansoor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-mono text-[10px] uppercase tracking-[0.16em] text-muted-ink",
								children: "Full Stack Developer"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `#${n.id}`,
							className: "relative shrink-0 rounded-full px-3 py-2 text-[13px] font-medium text-muted-ink transition-colors hover:text-violet-700 sm:px-3.5",
							children: [active === n.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-pill",
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 28
								},
								className: "absolute inset-0 rounded-full bg-violet-200/60"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `relative z-10 ${active === n.id ? "font-semibold text-violet-700" : ""}`,
								children: n.label
							})]
						}, n.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "ml-auto hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-violet-400 py-2.5 pl-5 pr-2.5 text-[13px] font-medium text-white shadow-[0_14px_32px_-16px_rgba(132,94,194,1)] transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex",
						children: ["Let's Talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-6 w-6 place-items-center rounded-full bg-white/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						className: "ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border border-violet-300/60 bg-white/70 text-violet-700 transition-colors hover:bg-white md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -8
				},
				transition: {
					duration: .22,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "nav-glass mt-2 rounded-[26px] p-3 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-1",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						onClick: () => setOpen(false),
						className: `rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors ${active === n.id ? "bg-violet-200/60 font-semibold text-violet-700" : "text-muted-ink hover:bg-white/60 hover:text-violet-700"}`,
						children: n.label
					}, n.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-700 to-violet-400 px-5 py-3 text-sm font-medium text-white",
					children: ["Let's Talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			}) })]
		})
	});
}
function Heading({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: `font-serif font-semibold leading-[1.05] tracking-[-0.03em] text-ink ${className}`,
		style: { fontSize: "clamp(1.8rem, 5.2vw, 3.6rem)" },
		children
	});
}
function GroceryPosDetailsModal() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const shouldReduceMotion = useReducedMotion();
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				type: "button",
				whileHover: { scale: 1.04 },
				whileTap: { scale: .97 },
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 20
				},
				className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-violet-400 px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_-12px_rgba(132,94,194,0.9)] outline-none transition-shadow hover:shadow-[0_18px_38px_-14px_rgba(132,94,194,1)] focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
				children: ["Project Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-4 w-4" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-[70] bg-ink/40 backdrop-blur-md duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "glass-panel fixed left-1/2 top-1/2 z-[80] flex max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[26px] p-0 shadow-[0_40px_120px_-45px_rgba(132,94,194,0.95)] outline-none duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100vw-3rem)] sm:rounded-[34px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close project details",
					className: "absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-violet-300/60 bg-white/80 text-violet-700 shadow-[0_12px_28px_-18px_rgba(132,94,194,0.9)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-paper sm:right-5 sm:top-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-y-auto px-5 pb-6 pt-6 sm:px-7 sm:pb-8 sm:pt-8 lg:px-9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: shouldReduceMotion ? false : {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .42,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "border-b border-violet-300/35 pb-6 pr-11 sm:pb-7 sm:pr-14",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex max-w-full items-center gap-2 rounded-full border border-violet-300/60 bg-white/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-violet-700 backdrop-blur sm:px-4 sm:text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-violet-500" }), "02 — POINT OF SALE SYSTEM"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex rounded-full border border-violet-300/50 bg-violet-200/40 px-3 py-1.5 text-xs font-medium text-violet-700",
										children: "Currently in Production"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "mt-5 font-serif font-semibold leading-[1.05] tracking-[-0.03em] text-ink",
									style: { fontSize: "clamp(1.9rem, 5vw, 3.45rem)" },
									children: "Smart Grocery POS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
									id: "grocery-pos-description",
									className: "mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-ink sm:text-base",
									children: "A modern point-of-sale system designed to simplify daily grocery store operations and provide an efficient experience for both administrators and employees."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-7 grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-violet-500",
								children: "Project Overview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] leading-relaxed text-muted-ink sm:text-base",
								children: "Smart Grocery POS is designed for grocery and small store businesses to manage products, billing, customers, and daily operations through a clean and intuitive interface. The system focuses on fast billing, organized inventory management, and a simple workflow for employees."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl",
									children: "Key Features"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden font-mono text-[10px] uppercase tracking-[0.18em] text-violet-500 sm:inline",
									children: "10 core modules"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
								children: GROCERY_FEATURES.map(({ title, Icon, text }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
									initial: shouldReduceMotion ? false : {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .36,
										delay: shouldReduceMotion ? 0 : .03 * index,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "group rounded-[22px] border border-violet-300/35 bg-white/55 p-4 shadow-[0_18px_42px_-34px_rgba(132,94,194,0.85)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/70 hover:bg-white/80 sm:p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 place-items-center rounded-2xl bg-violet-200/55 text-violet-700 transition-colors duration-300 group-hover:bg-violet-700 group-hover:text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-4 font-serif text-lg font-semibold tracking-[-0.01em] text-ink",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-ink",
											children: text
										})
									]
								}, title))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl",
								children: "Technology Stack"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3 md:grid-cols-2",
								children: GROCERY_TECH_STACK.map((stackGroup) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-[22px] border border-violet-300/35 bg-white/55 p-4 sm:p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[11px] uppercase tracking-[0.18em] text-violet-500",
										children: stackGroup.group
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: stackGroup.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-violet-300/50 bg-white/75 px-3 py-1.5 text-xs font-medium text-violet-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
											children: item
										}, item))
									})]
								}, stackGroup.group))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-8 flex flex-col gap-4 rounded-[24px] border border-violet-300/45 bg-violet-200/30 p-5 sm:flex-row sm:items-start sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-700 text-white shadow-[0_14px_30px_-16px_rgba(132,94,194,0.95)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[11px] uppercase tracking-[0.18em] text-violet-500",
									children: "Project Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-xl font-semibold tracking-[-0.01em] text-ink sm:text-2xl",
									children: "Status: Currently in Production"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-ink sm:text-[15px]",
									children: "This project is currently under active development and is not publicly available yet."
								})
							] })]
						})
					]
				})
			})]
		})] })]
	});
}
function ProjectCard({ p, i }) {
	const flipped = i % 2 === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: .05 * i,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group relative rounded-[32px] p-[1px] transition-transform duration-500 hover:-translate-y-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-[32px] bg-[linear-gradient(120deg,#845ec2,#be93fd,#faccff,#845ec2)] bg-[length:200%_100%] opacity-40 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				tilt: true,
				className: "relative overflow-hidden rounded-[31px] p-4 sm:p-6 lg:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid items-center gap-6 sm:gap-8 lg:grid-cols-2 ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-[320px] overflow-hidden rounded-[20px] border border-white/60 bg-white/40 sm:max-w-[440px] lg:max-w-none lg:rounded-[24px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [p.imageMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							media: "(max-width: 639px)",
							srcSet: p.imageMobile
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: `${p.title} interface preview`,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-700",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.n }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-violet-300" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.tag })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif font-semibold tracking-[-0.03em] text-ink",
							style: { fontSize: "clamp(1.45rem, 3.2vw, 2.4rem)" },
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-[15px] leading-relaxed text-muted-ink",
							children: p.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-violet-300/60 bg-white/70 px-3 py-1 text-xs font-medium text-violet-700",
								children: s
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [p.details === "grocery-pos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroceryPosDetailsModal, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								href: p.url,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-violet-400 px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_-12px_rgba(132,94,194,0.9)]",
								children: ["Live preview ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								href: GMAIL_COMPOSE,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/70 px-5 py-2.5 text-sm font-medium text-ink",
								children: ["Discuss project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })]
							})]
						})
					] })]
				})
			})]
		})
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden font-sans text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Background, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "home",
				className: "pt-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[85%] bg-[radial-gradient(60%_55%_at_72%_38%,oklch(0.82_0.116_308/38%)_0%,transparent_70%)] blur-[10px]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Hania Mansoor — Pakistan" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-7 font-serif font-bold leading-[0.98] tracking-[-0.04em] text-ink",
								style: { fontSize: "clamp(2.15rem, 6.8vw, 5rem)" },
								children: [
									"Effortless",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-teal",
										children: "interfaces."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-md text-base leading-relaxed text-muted-ink sm:text-lg",
								children: "Full stack developer and interface designer crafting premium, precise and quietly beautiful digital products."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#projects",
									className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-violet-500 to-violet-400 px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_44px_-16px_rgba(132,94,194,0.95)] transition-shadow hover:shadow-[0_22px_60px_-14px_rgba(132,94,194,1)]",
									children: ["View my work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/70 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur",
									children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .4,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-violet-500" }), " Available for freelance"]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						y: 40,
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroLaptop, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "about",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "About" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-start gap-5 sm:gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:items-center lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								"aria-hidden": true,
								animate: { rotate: 360 },
								transition: {
									duration: 22,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute -inset-2 rounded-[28px] bg-[conic-gradient(from_0deg,#845ec2,#be93fd,#faccff,#845ec2)] opacity-60 blur-[10px] sm:rounded-[36px]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								animate: { y: [
									0,
									-10,
									0
								] },
								transition: {
									duration: 7,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "relative overflow-hidden rounded-[20px] border border-white/70 shadow-[0_30px_60px_-40px_rgba(132,94,194,0.9)] sm:rounded-[28px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: about_default,
									alt: "Portrait of Hania Mansoor",
									loading: "eager",
									fetchPriority: "high",
									decoding: "async",
									width: 912,
									height: 1200,
									className: "aspect-square h-auto w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-700/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "Designing calm, building precise." }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-[15px] leading-relaxed text-muted-ink sm:text-base",
									children: "I'm Hania — a full stack developer from Pakistan who cares about the small things: the weight of a heading, the ease of a transition, the moment a page feels effortless. I design and build interfaces end-to-end, blending an editorial eye with clean, maintainable React."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4",
								children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .05 * i,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
										className: "rounded-3xl p-5 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-serif text-3xl font-semibold text-violet-700",
											children: s.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-xs text-muted-ink",
											children: s.label
										})]
									})
								}, s.label))
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "stack",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Stack" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							className: "mt-5 max-w-2xl",
							children: "The tools I build with."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-full bg-gradient-to-r from-violet-400/60 to-transparent" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4",
						children: STACK.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .06 * i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-violet-500 sm:text-[11px]",
									children: s.group
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3",
									children: s.items.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "font-mono text-sm text-ink transition-colors duration-300 hover:text-violet-700 sm:text-base",
										children: t
									}, t))
								})]
							})
						}, s.group))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "projects",
				className: "gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Selected work" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						className: "mt-6 max-w-2xl",
						children: "Products people actually enjoy using."
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 space-y-10",
					children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						p,
						i
					}, p.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "experience",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Experience" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							className: "mt-6 max-w-2xl",
							children: "Where I've been building."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-full bg-gradient-to-r from-violet-400/60 to-transparent" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 divide-y divide-violet-300/30",
						children: EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .06 * i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `grid gap-2 rounded-[24px] px-3 py-7 transition-colors duration-300 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6 sm:px-5 lg:grid-cols-[140px_minmax(0,1.1fr)_minmax(0,1fr)] ${e.highlight ? "bg-violet-200/25" : "hover:bg-white/40"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5 shrink-0 text-violet-500 sm:hidden" }), e.period]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `min-w-0 font-serif font-semibold leading-tight tracking-[-0.02em] ${e.highlight ? "text-violet-700" : "text-ink"}`,
										style: { fontSize: "clamp(1.25rem, 3vw, 2rem)" },
										children: e.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "min-w-0 text-sm leading-relaxed text-muted-ink lg:pt-1",
										children: e.text
									})
								]
							})
						}, e.role))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "education",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Education" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							className: "mt-6 max-w-2xl",
							children: "Foundations and continued study."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-6 md:grid-cols-2",
						children: EDUCATION.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .06 * i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
								tilt: true,
								className: "h-full rounded-[28px] p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6 text-violet-700" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-serif text-2xl font-semibold text-ink",
										children: e.degree
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm font-medium text-violet-500",
										children: e.org
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-ink",
										children: e.period
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted-ink",
										children: e.text
									})
								]
							})
						}, e.degree))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "contact",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "rounded-[36px] p-8 text-center sm:p-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mx-auto mt-7 max-w-3xl font-serif font-bold leading-[1.02] tracking-[-0.04em] text-ink",
								style: { fontSize: "clamp(1.9rem, 5.6vw, 4.1rem)" },
								children: ["Let's build something  ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-teal",
									children: "that solves a problem."
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-muted-ink",
								children: "Available for freelance projects and collaborations. Tell me what you're making — I'll reply within a day."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: GMAIL_COMPOSE,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-violet-500 to-violet-400 px-7 py-3.5 text-sm font-medium text-white shadow-[0_18px_44px_-16px_rgba(132,94,194,0.95)]",
									children: [
										EMAIL,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									href: LINKEDIN,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/70 px-7 py-3.5 text-sm font-medium text-ink",
									children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })]
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "rounded-[28px] px-6 py-7 sm:px-9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-between gap-6 sm:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-lg font-semibold tracking-tight text-ink",
								children: "Hania Mansoor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "flex flex-wrap justify-center gap-5 text-sm text-muted-ink",
								children: NAV.slice(1, 5).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `#${n.id}`,
									className: "transition-colors hover:text-violet-700",
									children: n.label
								}, n.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [{
									Icon: Linkedin,
									href: LINKEDIN,
									label: "LinkedIn profile"
								}, {
									Icon: Mail,
									href: GMAIL_COMPOSE,
									label: "Email Hania"
								}].map(({ Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": label,
									className: "grid h-10 w-10 place-items-center rounded-full border border-violet-300/60 bg-white/70 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-700",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-t border-violet-300/40 pt-5 text-center text-xs text-muted-ink",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Hania Mansoor · Designed & built in Pakistan"
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Portfolio as component };
