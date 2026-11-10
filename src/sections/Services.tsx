import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { services } from '../data/services'

export function Services({ teaser = false }: { teaser?: boolean }) {
  const list = teaser ? services.slice(0, 4) : services

  return (
    <section id="services" className="light-surface bg-paper text-graphite">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            <p className="text-[12px] tracking-[0.18em] text-graphite/50 uppercase md:col-span-3">
              Services
            </p>
            <h2 className="font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em] md:col-span-9 md:text-6xl">
              What the work is for.
            </h2>
          </div>
          <p className="mt-6 max-w-xl text-base text-graphite/70 md:ml-[25%]">
            Each service is framed around a business outcome — being understood, being contacted,
            staying current — rather than a list of tools.
          </p>
        </Reveal>

        <ol className="mt-14 border-t border-graphite/15">
          {list.map((service) => (
            <li key={service.index} className="group border-b border-graphite/15">
              <div className="grid gap-3 py-7 transition-colors duration-300 md:grid-cols-12 md:items-baseline md:group-hover:pl-2">
                <span className="font-display text-sm text-graphite/40 transition-colors group-hover:text-graphite md:col-span-2">
                  {service.index}
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight md:col-span-4 md:text-3xl">
                  {service.name}
                </h3>
                <div className="md:col-span-6">
                  <p className="text-base text-graphite/85">{service.benefit}</p>
                  {!teaser && <p className="mt-2 text-sm text-graphite/55">{service.detail}</p>}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {teaser && (
          <Link to="/services" className="mt-8 inline-flex text-sm font-medium underline-offset-4 hover:underline">
            All services
          </Link>
        )}
      </div>
    </section>
  )
}
