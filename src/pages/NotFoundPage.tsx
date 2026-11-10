import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <PageMeta title="Page not found — Webshift" />
      <p className="text-[12px] tracking-[0.18em] text-lime uppercase">404</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight text-foam">This page is not here.</h1>
      <p className="mt-4 text-mist">The link may be old, or the address was mistyped.</p>
      <Link to="/" className="mt-8 inline-flex text-lime">
        Back to the studio →
      </Link>
    </section>
  )
}
