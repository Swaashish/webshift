
import { TextRotate } from "../components/text-rotate";
import ProjectDeck from "../components/mockups/ProjectDeck";
import { MagneticButton } from "../components/MagneticButton";

import { motion } from "motion/react";

export function Hero() {
  const roles = [
    "Web Designer",
    "Video Editor",
    "Media Handler",
    "SEO Specialist",
    "Website Tester",
  ];

  return (
    <section className="relative isolate overflow-hidden border-b border-ink-line">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-brand/10 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-12 lg:px-16 lg:py-24">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-brand"
          >
            <span className="h-px w-8 bg-brand" />
            Independent Digital Creative Studio
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[11vw] font-semibold leading-[0.98] tracking-[-0.055em] text-foam sm:text-6xl lg:text-[78px] xl:text-[84px]"
          >
            <span className="block">Your business</span>

            <span className="block">deserves a better</span>

            {/* AUTOMATIC VERTICAL TEXT ROTATOR */}
            <TextRotate
              texts={roles}
              mainClassName="mt-2 min-h-[1.2em] overflow-hidden text-brand-gradient"
              splitLevelClassName="overflow-hidden pb-[0.08em]"
              elementLevelClassName="inline-block"
              splitBy="words"
              staggerFrom="first"
              staggerDuration={0.025}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              animatePresenceMode="wait"
              rotationInterval={1800}
              transition={{
                type: "tween",
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-xl text-base leading-8 text-foam/60 md:text-lg"
          >
            We design, create and manage digital experiences that help
            businesses build credibility, connect with customers and create
            better opportunities online.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/work">
              Explore our work
            </MagneticButton>

            <MagneticButton href="/contact" variant="ghost">
              Let's discuss your project
            </MagneticButton>
          </motion.div>

        </div>

        {/* RIGHT: AUTO-SCROLLING PROJECT DECK */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <ProjectDeck />
        </motion.div>

      </div>

      {/* BOTTOM INDICATOR */}
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between px-6 pb-8 text-[10px] uppercase tracking-[0.2em] text-foam/30 md:px-10 lg:px-16">
        <span>Scroll to explore</span>
        <span>Mathura · India</span>
      </div>

    </section>
  );
}
