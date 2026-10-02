import { Leaf, Soup, Building2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const PROMISES = [
  { icon: Leaf, title: 'Fresh every day', text: 'शिळं काही नाही. रोजचा डबा, रोज ताजा बनवलेला.' },
  { icon: Soup, title: 'Simple filling food', text: 'जास्त तेल-मसाला नाही. साधं, हलकं आणि पोटभर.' },
  { icon: Building2, title: 'Made for Pune', text: 'Students, working professionals आणि families साठी.' },
]

export function PromiseSection() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-charcoal px-6 py-16 text-charcoal-foreground sm:px-10 md:py-20">
        <SectionHeading eyebrow="आमचं वचन" title="जेवण साधं, पण मनापासून." invert />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-charcoal-foreground/10 bg-charcoal-foreground/[0.04] p-7 transition-colors hover:border-charcoal-foreground/20 hover:bg-charcoal-foreground/[0.07]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-xl">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal-foreground/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
