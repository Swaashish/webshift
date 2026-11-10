type ChromeProps = {
  url: string
  children: React.ReactNode
  className?: string
}

export function BrowserChrome({ url, children, className = '' }: ChromeProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-[#0e1318] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <span className="size-2 rounded-full bg-[#3a424c]" />
        <span className="size-2 rounded-full bg-[#3a424c]" />
        <span className="size-2 rounded-full bg-[#3a424c]" />
        <span className="ml-2 truncate rounded-full bg-white/5 px-3 py-0.5 font-sans text-[10px] tracking-wide text-[#8B9299]">
          {url}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

export function PhoneChrome({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] bg-[#0c1014] p-1.5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/15 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.25rem]">
        <span className="absolute top-1.5 left-1/2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-black/50" />
        {children}
      </div>
    </div>
  )
}
