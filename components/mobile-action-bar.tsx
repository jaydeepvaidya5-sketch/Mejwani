import { MessageCircle, Phone } from 'lucide-react'
import { telHref, whatsappHref } from '@/lib/site'

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={telHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 py-3 text-sm font-semibold text-primary"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call करा
        </a>
        <a
          href={whatsappHref('नमस्कार भूक संघटना! मला डबा order करायचा आहे.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
