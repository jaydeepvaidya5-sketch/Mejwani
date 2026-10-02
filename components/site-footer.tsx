import { MessageCircle, Phone } from 'lucide-react'
import { SITE, telHref, whatsappHref } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="bg-charcoal pb-24 pt-14 text-charcoal-foreground md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          <Logo className="[&>span]:ring-charcoal" />
          <div>
            <p className="font-heading text-2xl">{SITE.name}</p>
            <p className="text-charcoal-foreground/70">{SITE.tagline}</p>
            <p className="mt-3 text-sm text-charcoal-foreground/55">Pune • Home-style Tiffin Service</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a href={telHref} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
            <Phone className="size-4" aria-hidden="true" />
            Phone: {SITE.phone}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp: {SITE.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="border-t border-charcoal-foreground/10 pt-6 text-xs text-charcoal-foreground/50">
          © {new Date().getFullYear()} {SITE.name}. सर्व हक्क राखीव.
        </div>
      </div>
    </footer>
  )
}
