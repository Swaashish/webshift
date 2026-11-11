import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data/services";

gsap.registerPlugin(ScrollTrigger);

type ServicesProps = {
  teaser?: boolean;
};

export function Services({ teaser = false }: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const list = teaser ? services.slice(0, 4) : services;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".services-heading");
      const description = section.querySelector(".services-description");
      const cards = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll(".service-card")
      );

      gsap.fromTo(
        [heading, description],
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );

        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top+=110",
            endTrigger: cards[index + 1],
            end: "top top+=110",
            scrub: true,
            onUpdate: (self) => {
              gsap.set(card, {
                scale: 1 - self.progress * 0.05,
                opacity: 1 - self.progress * 0.25,
              });
            },
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, [list.length]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="light-surface relative overflow-visible bg-paper px-5 py-24 text-graphite md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="services-heading mb-5">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] opacity-60">
            What We Do
          </p>

          <h2 className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Our Services<span className="text-brand">.</span>
          </h2>
        </div>

        <p className="services-description mb-16 max-w-xl text-base leading-relaxed opacity-65 md:text-lg">
          We combine design, technology, and strategy to help businesses build
          a stronger digital presence.
        </p>

        {/* Vertical Card Stack */}
        <div className="relative overflow-visible">
          {list.map((service, index) => (
            <article
              key={service.name}
              className="service-card sticky mb-6 flex min-h-[350px] flex-col justify-between overflow-hidden rounded-3xl border border-ink-line bg-[#f4f1e9] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:min-h-[390px] md:p-12"
              style={{
                top: `${110 + index * 12}px`,
                zIndex: index + 1,
                transformOrigin: "center top",
              }}
            >
              {/* Decorative Number */}
              <span className="pointer-events-none absolute right-5 top-0 select-none font-display text-[130px] font-bold leading-none opacity-[0.045] md:right-10 md:text-[190px]">
                0{index + 1}
              </span>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">
                  Service / 0{index + 1}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-lg">
                  ↗
                </span>
              </div>

              <div className="relative z-10 max-w-3xl">
                <h3 className="mb-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">
                  {service.name}
                </h3>

                <p className="max-w-2xl text-base leading-relaxed opacity-70 md:text-lg">
                  {service.benefit}
                </p>

                {!teaser && service.detail && (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-55 md:text-base">
                    {service.detail}
                  </p>
                )}
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-ink-line pt-5">
                <span className="text-xs font-medium uppercase tracking-widest opacity-50">
                  WebShift Studio
                </span>

                <span className="text-sm font-medium">
                  Explore service <span className="ml-2">↗</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
