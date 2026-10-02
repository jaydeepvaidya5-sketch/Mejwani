import { MessageCircle, Phone, Clock } from 'lucide-react'
import { SITE, telHref, whatsappHref } from '@/lib/site'
import { OrderForm } from '@/components/order-form'
import { Reveal } from '@/components/reveal'

export function OrderSection() {
  return (
    <section id="order" className="scroll-mt-16 border-t border-border bg-muted/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12">
        <Reveal className="lg:col-span-2">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            Order करा
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-[2.75rem]">
            तुमचा डबा, दोन मिनिटांत book.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Form भरा आणि WhatsApp वर तुमची order थेट आमच्याकडे येईल. आम्ही लगेच confirm करू.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={whatsappHref(`नमस्कार ${SITE.name}! मला डब्याबद्दल माहिती हवी आहे.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift flex items-center gap-4 rounded-2xl bg-primary p-4 text-primary-foreground"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary-foreground/15">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold">WhatsApp वर बोला</span>
                <span className="block text-sm text-primary-foreground/75">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a href={telHref} className="hover-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-foreground">थेट call करा</span>
                <span className="block text-sm text-muted-foreground">{SITE.phone}</span>
              </span>
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary" aria-hidden="true" />
            आदल्या दिवशी order केल्यास सोयीचं.
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-[0_30px_60px_-40px_oklch(0.2_0.012_165/0.3)] sm:p-8">
            <OrderForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
