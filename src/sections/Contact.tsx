import { ContactForm } from "../components/ContactForm";
import InteractiveEarth from "../components/InteractiveEarth";
import { site, whatsappHref } from "../config/site";

export function Contact({ headline = true }: { headline?: boolean }) {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-ink-line bg-[#09090b] text-foam"
    >
      {/* Header */}
      {headline && (
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-20 text-center md:pt-24">
          <p className="text-xs uppercase tracking-[0.25em] text-lime">
            Let's talk
          </p>

          <h2 className="mt-3 font-display text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Contact us
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-mist md:text-lg">
            Have a project in mind? We'd love to hear about it.
            Tell us what you're building and let's make it happen.
          </p>
        </div>
      )}

      {/* Main Contact Area */}
      <div className="relative mx-auto grid max-w-[1280px] gap-14 px-6 pb-28 pt-16 md:px-10 md:pb-36 lg:grid-cols-12 lg:gap-16 lg:px-16">

        {/* LEFT COLUMN */}
        <div className="relative min-h-[650px] lg:col-span-5">

          {/* Contact Information */}
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-semibold">
              Get in touch
            </h3>

            <p className="mt-3 max-w-sm text-base leading-7 text-mist">
              Reach out through any channel below. Tell us about your
              business, your ideas, or the problem you're trying to solve.
            </p>

            <div className="mt-9 space-y-6">

              {/* Email */}
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-line bg-white/[0.04] transition-all duration-300 group-hover:border-lime group-hover:bg-lime/10 group-hover:text-lime">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <span className="text-sm text-mist transition-colors group-hover:text-lime">
                  {site.contact.email}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-line bg-white/[0.04] transition-all duration-300 group-hover:border-lime group-hover:bg-lime/10 group-hover:text-lime">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5Z" />
                    <path d="M9 9c.5 2 2 3.5 4 4l1-1 2 1-.5 2c-4 .5-8-3.5-7.5-7.5l2-.5 1 2Z" />
                  </svg>
                </span>

                <span className="text-sm text-mist transition-colors group-hover:text-lime">
                  WhatsApp · {site.contact.whatsappDisplay}
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-line bg-white/[0.04]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <span className="text-sm text-mist">
                  {site.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* 3D Rotating Earth */}
          <div className="pointer-events-auto absolute left-[-110px] top-[290px] z-0 h-[480px] w-[480px] max-w-[calc(100vw-40px)] md:left-[-100px] md:top-[270px] md:h-[540px] md:w-[540px]">
            <InteractiveEarth />
          </div>
        </div>

        {/* RIGHT COLUMN - CONTACT FORM */}
        <div className="relative z-10 lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-[#18181b] p-6 shadow-2xl md:p-10">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
                Contact form
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                Send us a message
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-mist">
                Tell us a little about your project. We'll get back
                to you as soon as possible.
              </p>
            </div>

            <div className="my-8 border-t border-dashed border-white/15" />

            {/* Existing form and submission logic */}
            <ContactForm />

          </div>

          <p className="mt-5 text-center text-xs text-mist">
            Your information stays private. We don't share your details.
          </p>
        </div>
      </div>
    </section>
  );
}