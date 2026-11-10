import { PageMeta } from '../components/PageMeta'
import { Contact } from '../sections/Contact'
import { Process } from '../sections/Process'
import { Services } from '../sections/Services'

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services — Webshift"
        description="Business websites, landing pages, redesigns, responsive design, WhatsApp integration, basic local SEO, and maintenance for local businesses."
      />
      <Services />
      <Process />
      <Contact />
    </>
  )
}
