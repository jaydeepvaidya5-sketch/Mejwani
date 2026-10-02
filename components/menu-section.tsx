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

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border">
              <Image
                src="/images/menu-thali.png"
                alt="चपाती, भाजी, वरण, भात आणि सॅलड असलेलं घरगुती ताट"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-sm font-semibold text-muted-foreground">प्रत्येक डब्यात</p>
            </Reveal>
            <ol className="mt-4 flex flex-col divide-y divide-border border-y border-border">
              {MENU_ITEMS.map((item, i) => (
                <Reveal key={item.name} delay={i * 80}>
                  <li className="group flex items-center gap-5 py-5">
                    <span className="font-heading text-sm tabular-nums text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <p className="font-heading text-xl text-foreground transition-colors group-hover:text-primary">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.marathi} · {item.note}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="size-2 rounded-full bg-border transition-colors group-hover:bg-accent"
                    />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
