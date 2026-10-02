import Image from 'next/image'
import { Gift, Truck } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-secondary/80 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 md:pt-16 lg:grid-cols-2 lg:gap-10 lg:pb-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            PUNE • HOME-STYLE TIFFIN SERVICE
          </p>

          <h1 className="mt-6 font-heading text-4xl leading-[1.15] text-primary sm:text-5xl lg:text-6xl">
            भूक लागली?
            <br />
            <span className="text-accent">डबा आम्ही देतो.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            दररोज ताजं, घरगुती आणि पोटभर जेवण. Monthly mess किंवा single tiffin — तुमच्या सोयीनुसार.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {'माझा डबा निवडा →'}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-card px-6 py-3.5 text-base font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary"
            >
              {'आजच्या डब्यात काय? ↓'}
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-xs text-muted-foreground">Single tiffin</dt>
              <dd className="mt-1 font-heading text-2xl text-primary">₹89</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Monthly पासून</dt>
              <dd className="mt-1 font-heading text-2xl text-primary">₹1,999</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">चपाती / डबा</dt>
              <dd className="mt-1 font-heading text-2xl text-primary">४</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-full border border-dashed border-gold/60"
          />
          <div className="animate-float-soft relative aspect-square overflow-hidden rounded-[2.5rem] border-8 border-card shadow-2xl shadow-primary/15">
            <Image
              src="/images/tiffin-hero.png"
              alt="ताज्या चपात्या, वरण-भात, भाजी आणि सॅलडने भरलेला स्टील टिफिन डबा"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="animate-float-soft-delayed absolute -left-2 top-8 flex items-center gap-2.5 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-6">
            <span className="flex size-9 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Gift className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold leading-tight text-foreground">
              पहिला monthly
              <br />
              डबा FREE
            </span>
          </div>

          <div className="animate-float-soft absolute -right-2 bottom-10 flex items-center gap-2.5 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Truck className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold leading-tight text-foreground">
              Monthly
              <br />
              Delivery FREE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
