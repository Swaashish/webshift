import { Reveal } from '../components/Reveal'
import { principles } from '../data/services'

export function Why() {
  return (
    <section className="border-t border-ink-line bg-graphite">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-16">
        <Reveal className="lg:col-span-4">
          <p className="text-[12px] tracking-[0.18em] text-lime uppercase">Why Webshift</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-foam">
            A studio, not a queue.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-ink-line border-y border-ink-line">
            {principles.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                <span className="font-display text-sm text-lime sm:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl text-foam sm:col-span-5">{item.title}</h3>
                <p className="text-sm leading-relaxed text-mist sm:col-span-6">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
