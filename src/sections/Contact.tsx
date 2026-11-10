import { ContactForm } from '../components/ContactForm'
import { site, whatsappHref } from '../config/site'

export function Contact({ headline = true }: { headline?: boolean }) {
  return (
    <section id="contact" className="border-t border-ink-line bg-graphite">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:px-16">
        <div className="lg:col-span-5">
          {headline && (
            <>
              <p className="text-[12px] tracking-[0.18em] text-lime uppercase">Contact</p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-foam md:text-6xl">
                Have a business ready for its next digital shift?
              </h2>
            </>
          )}
          <p className="mt-6 max-w-md text-base text-mist">
            Tell Webshift what the business does and what you want the website to change. A reply
            comes from the same person who will design it.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a href={whatsappHref()} className="block text-foam hover:text-lime">
              WhatsApp · {site.contact.whatsappDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="block text-foam hover:text-lime">
              {site.contact.email}
            </a>
            <p className="text-mist">{site.contact.location}</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
