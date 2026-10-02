import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PlanLink, type PlanId } from '@/components/plan-link'
import { cn } from '@/lib/utils'

type Plan = {
  name: string
  marathi: string
  price: string
  unit: string
  meals?: string
  features: string[]
  perks?: string[]
  featured?: boolean
  plan: PlanId
}

const PLANS: Plan[] = [
  {
    name: 'Monthly 2 Times',
    marathi: 'दोन्ही वेळचं जेवण',
    price: '₹3,599',
    unit: '/month',
    meals: 'Lunch + Dinner',
    features: ['4 chapati', 'Bhaji', 'Varan + Bhat', 'Salad'],
    perks: ['Delivery FREE', 'First tiffin FREE'],
    featured: true,
    plan: 'monthly-twice',
  },
  {
    name: 'Monthly 1 Time',
    marathi: 'एक वेळचं जेवण',
    price: '₹1,999',
    unit: '/month',
    meals: 'Lunch OR Dinner',
    features: ['4 chapati', 'Bhaji', 'Varan + Bhat', 'Salad'],
    perks: ['Delivery FREE', 'First tiffin FREE'],
    plan: 'monthly-once',
  },
  {
    name: 'One-Time Tiffin',
    marathi: 'आज फक्त एक डबा',
    price: '₹89',
    unit: '/dabba',
    features: ['4 chapati', 'Bhaji', 'Varan + Bhat', 'Salad'],
    plan: 'single',
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="माझा डबा निवडा"
          title="तुमच्या सोयीनुसार plan"
          description="कोणताही लपलेला खर्च नाही. Monthly plans वर delivery आणि पहिला डबा मोफत."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <article
                className={cn(
                  'hover-lift relative flex h-full flex-col rounded-3xl border p-7',
                  plan.featured
                    ? 'border-primary bg-card shadow-xl shadow-primary/10 ring-1 ring-primary'
                    : 'border-border bg-card',
                )}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    सर्वात लोकप्रिय
                  </span>
                ) : null}

                <header>
                  <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.marathi}</p>
                </header>

                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-5xl text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </p>

                {plan.meals ? (
                  <p className="mt-3 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                    {plan.meals}
                  </p>
                ) : (
                  <p className="mt-3 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                    Lunch किंवा Dinner
                  </p>
                )}

                <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground">
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                  {plan.perks?.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 font-semibold text-accent">
                      <Check className="size-4 shrink-0" aria-hidden="true" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <PlanLink
                  plan={plan.plan}
                  className={cn(
                    'mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition-colors',
                    plan.featured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-primary/30 text-primary hover:border-primary hover:bg-primary/5',
                  )}
                >
                  {'हा plan निवडा →'}
                </PlanLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
