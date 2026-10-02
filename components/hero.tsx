import Image from 'next/image'
import { ArrowDown, ArrowRight, Gift, Truck } from 'lucide-react'
import { SITE } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            PUNE • HOME-STYLE TIFFIN SERVICE
          </p>

          <h1 className="mt-6 font-heading text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
            भूक लागली?
            <br />
            <span className="text-primary">डबा आम्ही देतो.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            दररोज ताजं, घरगुती आणि पोटभर जेवण. Monthly mess किंवा single tiffin — तुमच्या सोयीनुसार.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              माझा डबा निवडा
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-foreground/25"
            >
              आजच्या डब्यात काय?
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 divide-x divide-border">
            <div className="pr-4">
              <dt className="text-xs text-muted-foreground">Single tiffin</dt>
              <dd className="mt-1 font-heading text-2xl text-foreground">₹89</dd>
            </div>
            <div className="px-4">
              <dt className="text-xs text-muted-foreground">Monthly पासून</dt>
              <dd className="mt-1 font-heading text-2xl text-foreground">₹1,999</dd>
            </div>
            <div className="pl-4">
              <dt className="text-xs text-muted-foreground">चपाती / डबा</dt>
              <dd className="mt-1 font-heading text-2xl text-foreground">4</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:120ms] lg:max-w-none">
          <div aria-hidden="true" className="absolute inset-x-6 inset-y-8 rounded-[2rem] bg-secondary sm:inset-x-10" />

          <div className="animate-float-soft relative aspect-square overflow-hidden rounded-2xl bg-card shadow-[0_40px_80px_-40px_oklch(0.2_0.012_165/0.35)] ring-1 ring-border">
            <Image
              src="/images/tiffin-hero.png"
              alt="ताज्या चपात्या, वरण-भात, भाजी आणि सॅलडने भरलेला स्टील टिफिन डबा"
              fill
              priority
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-card/90 px-4 py-3 backdrop-blur-md sm:inset-x-4 sm:bottom-4">
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-lg text-foreground">{SITE.name}</span>
                <span className="text-xs text-muted-foreground">{SITE.tagline}</span>
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                आजचा डबा
              </span>
            </div>
          </div>

          <div className="animate-float-soft-delayed absolute -left-2 top-6 flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-lg sm:-left-6 sm:top-10">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-[oklch(0.5_0.12_55)]">
              <Gift className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-foreground">पहिला डबा FREE</span>
          </div>

          <div className="animate-float-soft absolute -right-2 top-1/2 flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-lg sm:-right-6">
            <span className="flex size-8 items-center justify-center rounded-lg bg-secondary text-primary">
              <Truck className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold leading-tight text-foreground">
              Monthly
              <br />
              <span className="font-semibold text-muted-foreground">Delivery FREE</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
