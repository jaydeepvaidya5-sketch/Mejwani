import { Bike } from 'lucide-react'
import { DELIVERY_SLABS } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function DeliverySection() {
  return (
    <section id="delivery" className="scroll-mt-20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-7 md:grid-cols-5 md:items-center md:p-10">
            <div className="md:col-span-2">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Bike className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-heading text-3xl text-primary">Delivery charges</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                One-time tiffin साठी अंतरानुसार delivery. Monthly plans वर delivery पूर्णपणे FREE.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3 md:col-span-3">
              {DELIVERY_SLABS.map((slab) => (
                <li
                  key={slab.range}
                  className={cn(
                    'rounded-2xl border p-5 text-center',
                    slab.highlight ? 'border-primary/30 bg-primary/5' : 'border-border bg-background',
                  )}
                >
                  <p className="text-sm text-muted-foreground">{slab.range}</p>
                  <p
                    className={cn(
                      'mt-1 font-heading text-3xl',
                      slab.highlight ? 'text-primary' : 'text-foreground',
                    )}
                  >
                    {slab.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
