import { Bike, Truck } from 'lucide-react'
import { DELIVERY_SLABS } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function DeliverySection() {
  return (
    <section id="delivery" className="scroll-mt-20 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-border bg-card p-6 sm:p-8 md:grid-cols-5 md:items-center md:p-10">
            <div className="md:col-span-2">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Bike className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-heading text-3xl tracking-tight text-foreground">Delivery charges</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Single tiffin साठी अंतरानुसार delivery charge. Monthly plans वर delivery पूर्णपणे FREE.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                <Truck className="size-4" aria-hidden="true" />
                Monthly plans: Delivery FREE
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="text-sm font-semibold text-muted-foreground">Single tiffin — अंतरानुसार</p>
              <div className="relative mt-5">
                <div aria-hidden="true" className="absolute left-0 right-0 top-[11px] hidden h-0.5 bg-border sm:block" />
                <ol className="relative grid gap-3 sm:grid-cols-3 sm:gap-4">
                  {DELIVERY_SLABS.map((slab) => (
                    <li key={slab.range} className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'flex size-6 shrink-0 items-center justify-center rounded-full border-2 bg-card',
                          slab.highlight ? 'border-primary' : 'border-input',
                        )}
                      >
                        <span className={cn('size-2 rounded-full', slab.highlight ? 'bg-primary' : 'bg-input')} />
                      </span>
                      <div
                        className={cn(
                          'flex flex-1 items-center justify-between rounded-xl border px-4 py-3 sm:mt-4 sm:w-full sm:flex-col sm:items-start sm:py-4',
                          slab.highlight ? 'border-primary/30 bg-secondary' : 'border-border',
                        )}
                      >
                        <span className="text-sm text-muted-foreground">{slab.range}</span>
                        <span
                          className={cn(
                            'font-heading text-2xl sm:mt-1 sm:text-3xl',
                            slab.highlight ? 'text-primary' : 'text-foreground',
                          )}
                        >
                          {slab.price}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
