import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { MenuSection } from '@/components/menu-section'
import { PromiseSection } from '@/components/promise-section'
import { PricingSection } from '@/components/pricing-section'
import { DeliverySection } from '@/components/delivery-section'
import { OrderSection } from '@/components/order-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <MenuSection />
        <PromiseSection />
        <PricingSection />
        <DeliverySection />
        <OrderSection />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
