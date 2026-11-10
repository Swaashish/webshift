import { useEffect } from 'react'
import { site } from '../config/site'

export function PageMeta({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: site.name,
          description: site.description,
          url: site.url,
          email: site.contact.email,
          areaServed: 'Local businesses',
          makesOffer: 'Web design and development',
        }),
      }}
    />
  )
}
