'use client'

import { Check, Moon, Package, Sun, Truck, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PlanLink } from '@/components/plan-link'
import { usePlanState, type PlanId } from '@/lib/plan-store'
import { cn } from '@/lib/utils'

type Plan = {
  id: PlanId
  title: string
  price: string
  unit: string
  meals?: string
  icons: LucideIcon[]
  features: string[]
  freeDelivery: boolean
  cta: string
  popular?: boolean
  badge?: string
}

const FEATURES = ['4 Chapati', 'Bhaji', 'Varan + Bhat', 'Salad']

const PLANS: Plan[] = [
  {
    id: 'monthly-twice',
    title: 'Monthly • 2 Times',
    price: '₹3,599',
    unit: '/ month',
    meals: 'Lunch + Dinner',
    icons: [Sun, Moon],
    features: FEATURES,
    freeDelivery: true,
    cta: '2 वेळा डबा निवडा',
    popular: true,
  },
  {
    id: 'monthly-once',
    title: 'Monthly • 1 Time',
    price: '₹1,999',
    unit: '/ month',
    meals: 'Lunch OR Dinner',
    icons: [Sun],
    features: FEATURES,
    freeDelivery: true,
    cta: '1 वेळा डबा निवडा',
  },
  {
    id: 'single',
    title: 'Single Tiffin',
    price: '₹89',
    unit: '/ dabba',
    icons: [Package],
    features: FEATURES,
    freeDelivery: false,
    cta: 'एक डबा मागवा',
    badge: 'पहिल्यांदा try करा',
  },
]

export function PricingSection() {
  const { plan: selected, pickedFromPricing } = usePlanState()

  return (
    <section id="pricing" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Plans"
          title="तुमच्यासाठी योग्य डबा निवडा"
          description="रोजचं जेवण सोपं करा — तुमच्या गरजेनुसार पर्याय निवडा."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100} className="h-full">
              <PlanCard plan={plan} isSelected={pickedFromPricing && selected === plan.id} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Monthly plans वर delivery FREE. Single tiffin साठी delivery अंतरानुसार —{' '}
            <a href="#delivery" className="font-semibold text-foreground underline-offset-4 hover:underline">
              charges पाहा
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function PlanCard({ plan, isSelected }: { plan: Plan; isSelected: boolean }) {
  const emphasized = plan.popular || isSelected

  return (
    <article
      className={cn(
        'hover-lift relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 sm:p-7',
        isSelected
          ? 'border-primary shadow-[0_24px_50px_-28px_oklch(0.37_0.075_158/0.55)] ring-2 ring-primary'
          : plan.popular
            ? 'border-primary/40 shadow-[0_24px_50px_-32px_oklch(0.2_0.012_165/0.35)]'
            : 'border-border',
      )}
    >
      {plan.popular ? (
        <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-primary" aria-hidden="true" />
      ) : null}

      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg text-foreground">{plan.title}</h3>
          {plan.meals ? <p className="mt-0.5 text-sm text-muted-foreground">{plan.meals}</p> : null}
          {plan.badge ? (
            <p className="mt-1.5 inline-flex rounded-full border border-accent/50 px-2.5 py-0.5 text-xs font-semibold text-[oklch(0.48_0.11_55)]">
              {plan.badge}
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {isSelected ? (
            <span className="inline-flex animate-fade-up items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              <Check className="size-3" aria-hidden="true" />
              निवडलेला
            </span>
          ) : plan.popular ? (
            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
              Popular
            </span>
          ) : (
            plan.icons.map((Icon, idx) => (
              <span key={idx} className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Icon className="size-4" aria-hidden="true" />
              </span>
            ))
          )}
        </div>
      </header>

      <p className="mt-7 flex items-baseline gap-1.5">
        <span className="font-heading text-5xl font-extrabold tracking-tight text-foreground">{plan.price}</span>
        <span className="text-sm font-medium text-muted-foreground">{plan.unit}</span>
      </p>

      <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-dashed border-border pt-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-foreground">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="size-3" strokeWidth={3} aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
        {plan.freeDelivery ? (
          <li className="mt-1 flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 font-semibold text-secondary-foreground">
            <Truck className="size-4 shrink-0" aria-hidden="true" />
            Delivery FREE
          </li>
        ) : null}
      </ul>

      <PlanLink
        plan={plan.id}
        className={cn(
          'mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-base font-semibold transition-all duration-300 active:scale-[0.98]',
          emphasized
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'border border-foreground/15 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground',
        )}
      >
        {plan.cta}
      </PlanLink>
    </article>
  )
}
