import { HeartHandshake, MapPin, Sprout } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ITEMS = [
  { icon: HeartHandshake, title: 'घरगुती चव', text: 'आईच्या हातासारखी साधी, ओळखीची चव.' },
  { icon: MapPin, title: 'Pune delivery', text: 'तुमच्या घरी किंवा office ला वेळेवर डबा.' },
  { icon: Sprout, title: 'Fresh daily', text: 'रोज सकाळी ताज्या भाज्यांपासून बनवलेलं.' },
]

export function TrustStrip() {
  return (
    <section aria-label="आमच्यावर विश्वास का?" className="px-4 sm:px-6">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-3 md:divide-x md:divide-border">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 90} className="border-b border-border last:border-b-0 md:border-b-0">
            <div className="flex items-center gap-4 p-6 md:p-7">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg text-foreground">{item.title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
