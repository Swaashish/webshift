import { useState, type FormEvent } from 'react'
import { mailtoHref, projectTypes, site } from '../config/site'

type Fields = {
  name: string
  business: string
  email: string
  phone: string
  type: string
  description: string
}

const empty: Fields = {
  name: '',
  business: '',
  email: '',
  phone: '',
  type: projectTypes[0],
  description: '',
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [ready, setReady] = useState(false)

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
    setReady(false)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!fields.name.trim()) next.name = 'Add your name.'
    if (!fields.business.trim()) next.business = 'Add the business name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = 'Enter a valid email.'
    if (fields.description.trim().length < 12) {
      next.description = 'Say a little about the project — a sentence is enough.'
    }
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const body = [
      `Name: ${fields.name}`,
      `Business: ${fields.business}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone || '—'}`,
      `Project type: ${fields.type}`,
      '',
      fields.description,
    ].join('\n')

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Project enquiry — ${fields.business}`,
    )}&body=${encodeURIComponent(body)}`
    setReady(true)
  }

  const inputClass =
    'mt-2 w-full border-b border-ink-line bg-transparent py-3 text-foam outline-none placeholder:text-mist/70 focus:border-lime'

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm text-mist">
          Name
          <input
            className={inputClass}
            value={fields.name}
            onChange={(event) => update('name', event.target.value)}
            autoComplete="name"
          />
          {errors.name && <span className="mt-1 block text-xs text-lime">{errors.name}</span>}
        </label>
        <label className="block text-sm text-mist">
          Business name
          <input
            className={inputClass}
            value={fields.business}
            onChange={(event) => update('business', event.target.value)}
            autoComplete="organization"
          />
          {errors.business && (
            <span className="mt-1 block text-xs text-lime">{errors.business}</span>
          )}
        </label>
        <label className="block text-sm text-mist">
          Email
          <input
            type="email"
            className={inputClass}
            value={fields.email}
            onChange={(event) => update('email', event.target.value)}
            autoComplete="email"
          />
          {errors.email && <span className="mt-1 block text-xs text-lime">{errors.email}</span>}
        </label>
        <label className="block text-sm text-mist">
          Phone
          <input
            type="tel"
            className={inputClass}
            value={fields.phone}
            onChange={(event) => update('phone', event.target.value)}
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="block text-sm text-mist">
        Type of project
        <select
          className={`${inputClass} appearance-none`}
          value={fields.type}
          onChange={(event) => update('type', event.target.value)}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-graphite text-foam">
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm text-mist">
        Project description
        <textarea
          rows={5}
          className={`${inputClass} resize-y`}
          value={fields.description}
          onChange={(event) => update('description', event.target.value)}
        />
        {errors.description && (
          <span className="mt-1 block text-xs text-lime">{errors.description}</span>
        )}
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex bg-lime px-5 py-3 text-sm font-medium text-graphite hover:bg-lime-deep"
        >
          Prepare email
        </button>
        <a href={mailtoHref()} className="text-sm text-mist underline-offset-4 hover:text-foam hover:underline">
          Or email {site.contact.email} directly
        </a>
      </div>

      <p className="max-w-xl text-sm leading-relaxed text-mist">
        This form does not send on its own. Preparing the email opens your mail app with the
        details filled in. A hosted form endpoint is not connected yet — see the README before
        launch.
      </p>
      {ready && (
        <p className="text-sm text-lime" role="status">
          Your mail app should open with this enquiry. If it does not, email {site.contact.email}{' '}
          directly.
        </p>
      )}
    </form>
  )
}
