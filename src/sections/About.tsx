import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { site } from '../config/site'

export function About({ full = false }: { full?: boolean }) {
  return (
    <section id="about" className="border-t border-ink-line bg-graphite-raised">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-graphite ring-1 ring-ink-line">
            <div className="absolute inset-6 border border-dashed border-mist/40" />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
              <p className="text-[11px] tracking-[0.18em] text-lime uppercase">Portrait</p>
              <p className="mt-2 max-w-[16ch] font-display text-3xl leading-tight text-foam">
                Photo placeholder
              </p>
              <p className="mt-3 max-w-xs text-sm text-mist">
                Drop a portrait into this frame when one is ready. Nothing is invented in its place.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.08}>
          <p className="text-[12px] tracking-[0.18em] text-lime uppercase">About</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-foam md:text-6xl">
            One studio. Direct from the work.
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-mist">
            <p>
              {site.founderLabel} runs Webshift as an independent practice — designing and building
              websites for local businesses that need to look established and be easy to contact.
            </p>
            <p>
              The interest is thoughtful design with a practical job: a repair shop that can take a
              booking, a home-service company that can start a WhatsApp thread, a new business that
              needs a credible first page. The work stays close. There is no account team between
              the conversation and the website.
            </p>
            {full && (
              <p>
                Webshift is not a large agency, and it does not pretend to be one. Projects are
                taken on selectively so the design and the build stay with the same person. If a
                public bio, portrait, or name should appear here, it is configured in one place —
                never filled in with credentials that have not been confirmed.
              </p>
            )}
          </div>
          {!full && (
            <Link to="/about" className="mt-8 inline-flex text-sm text-lime">
              More about the studio →
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  )
}
