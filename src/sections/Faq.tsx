import { useState } from 'react'
import { faqs } from '../data/services'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="light-surface bg-paper text-graphite">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-16">
        <div className="lg:col-span-4">
          <p className="text-[12px] tracking-[0.18em] text-graphite/50 uppercase">FAQ</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em]">
            Before you write.
          </h2>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((item, index) => {
            const expanded = open === index
            return (
              <div key={item.question} className="border-b border-graphite/15">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-xl tracking-tight md:text-2xl"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    {item.question}
                    <span aria-hidden="true" className="font-sans text-base text-graphite/40">
                      {expanded ? '–' : '+'}
                    </span>
                  </button>
                </h3>
                {expanded && (
                  <p className="max-w-2xl pb-6 text-sm leading-relaxed text-graphite/70">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
