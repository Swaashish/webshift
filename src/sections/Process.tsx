import { Reveal } from '../components/Reveal'
import { process } from '../data/services'

export function Process() {
  return (
    <section className="light-surface bg-paper text-graphite">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="text-[12px] tracking-[0.18em] text-graphite/50 uppercase">Process</p>
          <h2 className="mt-4 max-w-lg font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-6xl">
            Four steps. No theatre.
          </h2>
        </Reveal>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-3 right-[8%] left-[8%] hidden h-px bg-graphite/20 md:block"
          />
          {process.map((step, index) => (
            <Reveal key={step.index} delay={index * 0.08} as="li">
              <span className="relative inline-flex size-7 items-center justify-center rounded-full bg-graphite font-display text-[11px] text-lime">
                {step.index}
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/65">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
