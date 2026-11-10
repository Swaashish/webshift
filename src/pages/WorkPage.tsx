import { PageMeta } from '../components/PageMeta'
import { SelectedWork } from '../sections/SelectedWork'

export function WorkPage() {
  return (
    <>
      <PageMeta
        title="Work — Webshift"
        description="Website concepts for mobile repair, home services, and solar businesses. Studies by Webshift, an independent web design studio."
      />
      <SelectedWork />
    </>
  )
}
