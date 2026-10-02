import { MessageCircle, Phone } from 'lucide-react'
import { SITE, telHref, whatsappHref } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="bg-primary pb-24 pt-14 text-primary-foreground md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          <Logo className="bg-primary-foreground text-primary ring-offset-primary" />
          <div>
            <p className="font-heading text-2xl">{SITE.name}</p>
            <p className="text-primary-foreground/75">{SITE.tagline}</p>
            <p className="mt-3 text-sm text-primary-foreground/60">Pune • Home-style Tiffin Service</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a href={telHref} className="inline-flex items-center gap-2 hover:text-gold">
            <Phone className="size-4" aria-hidden="true" />
            Phone: {SITE.phone}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-gold"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp: {SITE.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-primary-foreground/15 px-4 pt-6 text-xs text-primary-foreground/55 sm:px-6">
        © {new Date().getFullYear()} {SITE.name}. सर्व हक्क राखीव.
      </div>
    </footer>
  )
}
