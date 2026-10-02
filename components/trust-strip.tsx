import { HeartHandshake, MapPin, Sprout } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const ITEMS = [
  { icon: HeartHandshake, title: 'घरगुती चव', text: 'आईच्या हातासारखी साधी, ओळखीची चव.' },
  { icon: MapPin, title: 'Pune delivery', text: 'तुमच्या घरी किंवा office ला वेळेवर डबा.' },
  { icon: Sprout, title: 'Fresh daily', text: 'रोज सकाळी ताज्या भाज्यांपासून बनवलेलं.' },
]

export function TrustStrip() {
  return (
    <section aria-label="आमच्यावर विश्वास का?" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-px px-4 sm:px-6 md:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="flex items-start gap-4 py-7 md:px-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-xl text-primary">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
