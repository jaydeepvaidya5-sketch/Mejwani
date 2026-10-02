import { MessageCircle, Phone, Clock } from 'lucide-react'
import { SITE, telHref, whatsappHref } from '@/lib/site'
import { OrderForm } from '@/components/order-form'
import { Reveal } from '@/components/reveal'

export function OrderSection() {
  return (
    <section id="order" className="scroll-mt-20 bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="text-sm font-semibold tracking-wide text-accent">Order करा</p>
          <h2 className="mt-3 font-heading text-3xl leading-tight text-primary sm:text-4xl">
            तुमचा डबा, दोन मिनिटांत book.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Form भरा आणि WhatsApp वर तुमची order थेट आमच्याकडे येईल. आम्ही लगेच confirm करू.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={whatsappHref('नमस्कार भूक संघटना! मला डब्याबद्दल माहिती हवी आहे.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-foreground">WhatsApp वर बोला</span>
                <span className="block text-sm text-muted-foreground">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a href={telHref} className="hover-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
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
          <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-8">
            <OrderForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
