import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import { HeroCluster } from '../components/mockups/ProjectMockup'
import { MagneticButton } from '../components/MagneticButton'
import { MaskLine } from '../components/Reveal'

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 })
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 })

  function onMove(event: React.MouseEvent) {
    if (reduce || !ref.current) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width - 0.5)
    py.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0)
        py.set(0)
      }}
      className="relative overflow-hidden border-b border-ink-line"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(198,243,107,0.08),transparent_68%)]"
      />
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:px-16 lg:py-28">
        <div className="lg:col-span-7">
          <p className="text-[12px] tracking-[0.18em] text-lime uppercase">
            Independent web design studio
          </p>
          <h1 className="mt-6 font-display text-[13vw] leading-[0.88] font-semibold tracking-[-0.045em] text-foam sm:text-7xl lg:text-[92px] xl:text-[104px]">
            <MaskLine>Your business</MaskLine>
            <MaskLine delay={0.08}>deserves</MaskLine>
            <MaskLine delay={0.16}>
              a <span className="text-brand-gradient">better</span> presence.
            </MaskLine>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            We design and develop modern websites that help businesses build credibility, connect
            with customers and create better opportunities online.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton to="/work">Explore our work</MagneticButton>
            <MagneticButton to="/contact" variant="ghost">
              Let’s discuss your project
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          {reduce ? (
            <HeroCluster />
          ) : (
            <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HeroCluster />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      <p className="mx-auto hidden max-w-[1280px] px-16 pb-8 text-[11px] tracking-[0.2em] text-mist uppercase lg:block">
        Scroll
      </p>
    </section>
  )
}
