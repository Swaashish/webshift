
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const achievements = [
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Projects Across Industries" },
  { value: 5, suffix: "+", label: "Years of Experience" },
];

const videoUrl =
  "https://freestockfootagearchive.com/wp-content/uploads/2021/01/Moving-Pixelsort-Abstract-Background-Effect-Loop.mp4";

const poster =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80";

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start: number | null = null;
    const duration = 1800;
    let animationFrame = 0;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [visible, value]);

  return (
    <div ref={elementRef}>
      {count}
      {suffix}
    </div>
  );
}

export default function About({ full = false }: { full?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden border-t border-ink-line bg-graphite text-foam">

      {/* Online background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Background overlays */}
      <div className="absolute inset-0 -z-10 bg-graphite/75" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">

        <div className="grid items-center gap-8 lg:grid-cols-12">

          {/* About content */}
          <div className="lg:col-span-8">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              About WebShift
            </span>

            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Creative thinking.
              <br />
              <span className="text-brand">Digital execution.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              WebShift is a creative digital team helping businesses build
              their online presence through modern websites, engaging video
              content, and effective digital solutions.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              We work with businesses across different industries, combining
              creativity, technology, and strategy to turn ideas into
              meaningful digital experiences.
            </p>

            {full && (
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                From the first idea to the final launch, our focus is on
                creating work that looks professional, performs reliably,
                and helps businesses grow.
              </p>
            )}

            {!full && (
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-4"
              >
                More about us <span>↗</span>
              </Link>
            )}
          </div>

          {/* Animated WebShift mark */}
          <div className="hidden items-center justify-center lg:col-span-4 lg:flex">
            <div className="relative flex h-64 w-64 items-center justify-center">
              <div className="absolute inset-0 animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-brand/30" />
              <div className="absolute inset-7 rounded-full border border-brand/20" />
              <div className="absolute inset-14 rounded-full border border-brand/30" />

              <div className="flex h-24 w-24 animate-[float_4s_ease-in-out_infinite] items-center justify-center rounded-2xl border border-brand/40 bg-brand/10 backdrop-blur-md">
                <span className="font-display text-4xl font-bold text-brand">
                  W.
                </span>
              </div>

              <span className="absolute right-8 top-8 h-3 w-3 rounded-full bg-brand shadow-[0_0_20px_#b7ff4a]" />
              <span className="absolute bottom-8 left-8 h-2 w-2 rounded-full bg-brand" />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid max-w-3xl grid-cols-3 border-y border-white/15 py-6 md:mt-14 md:py-8">
          {achievements.map((item, index) => (
            <div
              key={item.label}
              className={`px-3 md:px-6 ${
                index !== 0 ? "border-l border-white/15" : ""
              }`}
            >
              <div className="font-display text-3xl font-semibold text-brand md:text-5xl">
                <Counter value={item.value} suffix={item.suffix} />
              </div>

              <p className="mt-2 text-[10px] leading-4 text-white/60 md:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-white/50 md:text-sm">
            Ideas into experiences. Experiences into growth.
          </p>

          <span className="text-xs tracking-widest text-brand">
            WEBSHIFT © 2026
          </span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
