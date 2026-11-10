import { motion, useReducedMotion } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'lime' | 'ghost' | 'ink'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const variants = {
  lime: 'bg-lime text-graphite hover:bg-lime-deep',
  ghost: 'bg-transparent text-foam ring-1 ring-foam/25 hover:ring-foam/60',
  ink: 'bg-graphite text-paper hover:bg-graphite-raised',
}

export function MagneticButton({
  children,
  to,
  href,
  variant = 'lime',
  className = '',
  type = 'button',
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-[15px] font-medium tracking-tight transition-colors ${variants[variant]} ${className}`

  const onMove = (event: React.MouseEvent) => {
    if (reduce || !ref.current) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.3}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)'
  }

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-flex transition-transform duration-200 ease-out"
    >
      {to ? (
        <Link to={to} className={classes} onClick={onClick}>
          {children}
        </Link>
      ) : href ? (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      ) : (
        <button type={type} className={classes} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  )

  return inner
}
