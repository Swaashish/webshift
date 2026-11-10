import { PageMeta } from '../components/PageMeta'
import { site } from '../config/site'
import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Faq } from '../sections/Faq'
import { Hero } from '../sections/Hero'
import { Process } from '../sections/Process'
import { SelectedWork } from '../sections/SelectedWork'
import { Services } from '../sections/Services'
import { Why } from '../sections/Why'

export function HomePage() {
  return (
    <>
      <PageMeta title={`${site.name} — Web design for local businesses`} description={site.description} />
      <Hero />
      <SelectedWork />
      <Services teaser />
      <Why />
      <Process />
      <About />
      <Faq />
      <Contact />
    </>
  )
}
