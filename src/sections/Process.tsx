
import { Reveal } from '../components/Reveal'
import { process } from '../data/services'

export function Process() {
  return (
    <section className="light-surface bg-paper text-graphite">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">

        {/* Heading */}
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-graphite/50">
            How We Work
          </p>

          <div className="mt-3 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
              Simple process. <br />
              <span className="text-brand">Real results.</span>
            </h2>

            <p className="max-w-xs text-xs leading-relaxed text-graphite/60 md:text-sm">
              From the first conversation to the final delivery, we keep things
              clear, collaborative, and focused.
            </p>
          </div>
        </Reveal>

        {/* Process Cards */}
        <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <Reveal key={step.index} delay={index * 0.08} as="li">
              <div className="group relative flex h-full min-h-[190px] flex-col justify-between rounded-2xl border border-ink-line bg-[#f4f1e9] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">

                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-semibold tracking-tight text-brand/80">
                    {step.index}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-line text-sm transition-all duration-300 group-hover:bg-graphite group-hover:text-paper">
                    ↗
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-graphite/65">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  )
}
