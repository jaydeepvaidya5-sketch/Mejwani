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
    <section className="bg-primary py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="आमचं वचन" title="जेवण साधं, पण मनापासून." invert />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-3xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-7 transition-colors hover:bg-primary-foreground/10">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gold/20 text-gold">
                  <p.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-primary-foreground/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
