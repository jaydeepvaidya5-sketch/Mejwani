import { Phone } from 'lucide-react'
import { SITE, telHref } from '@/lib/site'
import { Logo } from '@/components/logo'

const NAV = [
  { href: '#menu', label: 'आजचा डबा' },
  { href: '#pricing', label: 'Plans' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#order', label: 'Order' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${SITE.name} — मुख्य पान`}>
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg text-primary">{SITE.name}</span>
            <span className="text-[11px] text-muted-foreground">{SITE.tagline}</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-foreground/80">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {SITE.phone}
          </a>
          <a
            href="#order"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Order करा
          </a>
        </div>
      </div>
    </header>
  )
}
