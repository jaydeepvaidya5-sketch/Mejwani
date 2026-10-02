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
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label={`${SITE.name} — मुख्य पान`}>
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-xl text-foreground">{SITE.name}</span>
            <span className="mt-1 text-[11px] text-muted-foreground">{SITE.tagline}</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 sm:inline-flex"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
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
