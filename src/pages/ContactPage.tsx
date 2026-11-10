import { PageMeta } from '../components/PageMeta'
import { Contact } from '../sections/Contact'

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact — Webshift"
        description="Start a website project with Webshift. Share your business, the type of site, and how to reach you."
      />
      <Contact />
    </>
  )
}
