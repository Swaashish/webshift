import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { ProjectStage } from '../components/mockups/ProjectMockup'
import { MagneticButton } from '../components/MagneticButton'
import { getProject, projects } from '../data/projects'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length]

  return (
    <>
      <PageMeta
        title={`${project.name} — Website concept — Webshift`}
        description={`${project.summary} A website concept by Webshift for ${project.industry.toLowerCase()}.`}
      />
      <article className="mx-auto max-w-[1280px] px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm text-mist hover:text-foam">
          <ArrowLeft size={16} aria-hidden="true" />
          All work
        </Link>

        <header className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-display text-sm text-lime">
              {project.index} <span className="text-mist">/ 03 · {project.type}</span>
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-foam md:text-7xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-mist">{project.summary}</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 self-end text-sm lg:col-span-5">
            <div>
              <dt className="text-[11px] tracking-[0.16em] text-mist uppercase">Industry</dt>
              <dd className="mt-2 text-foam">{project.industry}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.16em] text-mist uppercase">Focus</dt>
              <dd className="mt-2 text-foam">{project.focus}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-[11px] tracking-[0.16em] text-mist uppercase">Pages explored</dt>
              <dd className="mt-2 text-foam">{project.pages.join(' · ')}</dd>
            </div>
          </dl>
        </header>

        <div className="mt-12 md:mt-16">
          <ProjectStage project={project} priority />
        </div>

        <div className="mt-16 grid gap-12 border-t border-ink-line pt-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl tracking-tight text-foam">The situation</h2>
            <p className="mt-4 text-base leading-relaxed text-mist">{project.problem}</p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl tracking-tight text-foam">Approach</h2>
            <ol className="mt-6 space-y-4">
              {project.approach.map((step, index) => (
                <li key={step} className="grid grid-cols-[auto_1fr] gap-4 border-b border-ink-line pb-4">
                  <span className="font-display text-sm text-lime">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foam/90">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-mist">
              This is a design concept used to show how Webshift would approach the brief. It is not
              a launched client project and no results are claimed.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink-line py-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] tracking-[0.16em] text-mist uppercase">Next concept</p>
            <Link to={`/work/${next.slug}`} className="mt-2 block font-display text-3xl text-foam hover:text-lime">
              {next.name}
            </Link>
          </div>
          <MagneticButton to="/contact">Start a project like this</MagneticButton>
        </div>
      </article>
    </>
  )
}
