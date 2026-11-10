import { PageMeta } from '../components/PageMeta'
import { About } from '../sections/About'
import { Why } from '../sections/Why'

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About — Webshift"
        description="Webshift is an independently operated web design studio focused on thoughtful websites for local businesses."
      />
      <About full />
      <Why />
    </>
  )
}
