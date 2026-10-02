import Image from 'next/image'
import { MENU_ITEMS } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="आजच्या डब्यात काय?"
          title="साधं, पोटभर, रोजचं जेवण"
          description="प्रत्येक डब्यात हे सगळं — भाजी रोज बदलते, चव मात्र घरचीच."
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
              <Image
                src="/images/menu-thali.png"
                alt="चपाती, भाजी, वरण, भात आणि सॅलड असलेलं घरगुती ताट"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {MENU_ITEMS.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <li className="hover-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-heading text-lg text-accent">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {item.name} <span className="font-normal text-muted-foreground">· {item.marathi}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
