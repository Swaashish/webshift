import type { Project } from '../../data/projects'
import { BrowserChrome, PhoneChrome } from './BrowserChrome'

function TelecomScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-[#F4F1EA] text-[#161616]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[11px] font-semibold tracking-tight">Jaswant Telecom</span>
        <span className="rounded-full bg-[#E23B3B] px-2 py-0.5 text-[8px] font-medium text-white">
          Book repair
        </span>
      </div>
      <div className="px-4 pb-4">
        <p className="text-[8px] tracking-[0.16em] text-[#8a8178] uppercase">Mobile repair</p>
        <p className={`mt-1 leading-[1.05] font-semibold tracking-tight ${compact ? 'text-[15px]' : 'text-[22px]'}`}>
          Screens, batteries,
          <br />
          and the rest.
        </p>
        {!compact && (
          <p className="mt-2 max-w-[26ch] text-[9px] leading-snug text-[#5c564f]">
            Same-counter repairs and genuine accessories. Ask before you walk in.
          </p>
        )}
      </div>
      <div className={`grid gap-1.5 px-4 pb-4 ${compact ? 'grid-cols-1' : 'grid-cols-3'}`}>
        {(compact ? ['Screen', 'Battery'] : ['Screen', 'Battery', 'Water']).map((item) => (
          <div key={item} className="rounded-md bg-white px-2 py-2 ring-1 ring-black/5">
            <div className="mb-1.5 h-6 rounded bg-[#161616]" />
            <p className="text-[8px] font-medium">{item}</p>
          </div>
        ))}
      </div>
      {!compact && (
        <div className="mx-4 mb-4 flex items-center justify-between rounded-md bg-[#161616] px-3 py-2 text-white">
          <span className="text-[8px]">Accessories in stock</span>
          <span className="text-[8px] text-[#E23B3B]">View →</span>
        </div>
      )}
    </div>
  )
}

function AirScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-[#F3F6F7] text-[#14202A]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between border-b border-[#14202A]/10 px-4 py-3">
        <span className="text-[11px] font-semibold tracking-tight">Northline Air</span>
        <span className="text-[8px] tracking-wide text-[#3E6F8C]">WhatsApp</span>
      </div>
      <div className="grid gap-3 px-4 py-4" style={{ gridTemplateColumns: compact ? '1fr' : '1.3fr 0.7fr' }}>
        <div>
          <p className="text-[8px] tracking-[0.16em] text-[#6d7c86] uppercase">AC repair</p>
          <p className={`mt-1 leading-none font-semibold tracking-tight ${compact ? 'text-[15px]' : 'text-[20px]'}`}>
            Not cooling.
            <br />
            We’ll come out.
          </p>
        </div>
        {!compact && (
          <div className="rounded-md bg-[#14202A] p-2 text-white">
            <p className="text-[8px] text-[#9eb0bc]">Request a visit</p>
            <div className="mt-2 h-4 rounded bg-white/10" />
            <div className="mt-1 h-4 rounded bg-[#3E6F8C]" />
          </div>
        )}
      </div>
      <div className="space-y-1 px-4 pb-4">
        {(compact ? ['Service', 'Gas refill'] : ['Service & clean', 'Installation', 'Not cooling']).map(
          (row) => (
            <div
              key={row}
              className="flex items-center justify-between border-t border-[#14202A]/10 py-1.5 text-[8px]"
            >
              <span>{row}</span>
              <span className="text-[#3E6F8C]">→</span>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

function SolarScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-[#F6F1E7] text-[#231C14]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[11px] font-semibold tracking-tight">Helio Field</span>
        <span className="text-[8px] tracking-[0.14em] uppercase">Solar</span>
      </div>
      <div className="px-4">
        <p className={`leading-[1.02] font-semibold tracking-tight ${compact ? 'text-[15px]' : 'text-[20px]'}`}>
          Rooftop solar,
          <br />
          explained plainly.
        </p>
      </div>
      <div className={`mt-3 grid gap-1.5 px-4 ${compact ? 'grid-cols-2' : 'grid-cols-3'}`}>
        <div className="col-span-2 h-16 rounded-md bg-[#231C14]">
          <div className="m-2 grid h-[calc(100%-16px)] grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="rounded-[2px] bg-[#C9852A]/80" />
            ))}
          </div>
        </div>
        {!compact && (
          <div className="rounded-md bg-white p-2 ring-1 ring-black/5">
            <p className="text-[7px] tracking-wide text-[#8a7660] uppercase">Site visit</p>
            <p className="mt-1 text-[9px] leading-tight font-medium">Home or small commercial</p>
          </div>
        )}
      </div>
      <div className="mt-3 flex gap-2 px-4 pb-4 text-[8px]">
        <span className="rounded-full bg-[#231C14] px-2 py-1 text-[#F6F1E7]">Request a visit</span>
        <span className="rounded-full px-2 py-1 ring-1 ring-[#231C14]/20">How it works</span>
      </div>
    </div>
  )
}

function Screen({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.slug === 'jaswant-telecom') return <TelecomScreen compact={compact} />
  if (project.slug === 'northline-air') return <AirScreen compact={compact} />
  return <SolarScreen compact={compact} />
}

export function ProjectStage({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  return (
    <div className="relative" aria-hidden={priority ? undefined : true}>
      <BrowserChrome url={`webshift.studio/work/${project.slug}`} className="relative z-10">
        <Screen project={project} />
      </BrowserChrome>
      <PhoneChrome className="absolute -right-3 bottom-[-8%] z-20 w-[28%] min-w-16 sm:-right-6 sm:w-[30%]">
        <Screen project={project} compact />
      </PhoneChrome>
    </div>
  )
}

export function HeroCluster() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[520px]" aria-hidden="true">
      <div className="absolute top-[8%] left-[6%] w-[78%] -rotate-6">
        <BrowserChrome url="jaswant.example">
          <TelecomScreen />
        </BrowserChrome>
      </div>
      <div className="absolute top-[28%] left-[22%] w-[74%] rotate-3">
        <BrowserChrome url="northline.example">
          <AirScreen />
        </BrowserChrome>
      </div>
      <div className="absolute right-[4%] bottom-[4%] w-[34%]">
        <PhoneChrome>
          <SolarScreen compact />
        </PhoneChrome>
      </div>
    </div>
  )
}
