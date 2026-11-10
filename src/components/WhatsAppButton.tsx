import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '../config/site'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      className="fixed right-4 bottom-4 z-30 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-3 text-sm font-medium text-graphite shadow-lg transition-transform hover:-translate-y-0.5 md:right-6 md:bottom-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
