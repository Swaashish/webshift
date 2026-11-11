
import { useState } from 'react'
import { faqs } from '../data/services'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="light-surface bg-paper text-graphite">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-12 md:px-8 md:py-16">

        <div className="md:col-span-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-graphite/50">
            FAQ
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
            Good to <br />
            <span className="text-brand">know.</span>
          </h2>

          <p className="mt-3 max-w-xs text-xs leading-relaxed text-graphite/60">
            A few things you might want to know before getting started with WebShift.
          </p>
        </div>

        <div className="md:col-span-8">
          {faqs.map((item, index) => {
            const expanded = open === index

            return (
              <div key={item.question} className="border-b border-graphite/15">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 py-4 text-left font-display text-base font-medium tracking-tight transition-colors hover:text-brand md:text-lg"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span>{item.question}</span>

                    <span
                      aria-hidden="true"
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-graphite/20 text-sm transition-transform duration-300 ${
                        expanded ? 'rotate-180 bg-graphite text-paper' : ''
                      }`}
                    >
                      {expanded ? '−' : '+'}
                    </span>
                  </button>
                </h3>

                <div
                  className={`grid transition-all duration-300 ${
                    expanded
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-4 pr-8 text-xs leading-relaxed text-graphite/65 md:text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
