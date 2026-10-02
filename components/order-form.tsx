'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { CheckCircle2, Info, Send } from 'lucide-react'
import { MONTHLY_PLANS, SINGLE_TIFFIN_PRICE, SITE, formatINR, whatsappHref } from '@/lib/site'
import { selectMonthly, selectPlan, usePlanState, type PlanId } from '@/lib/plan-store'
import { cn } from '@/lib/utils'

type Frequency = keyof typeof MONTHLY_PLANS

type Errors = Partial<Record<'name' | 'mobile' | 'location' | 'startDate', string>>

const PLAN_LABELS: Record<PlanId, { title: string; price: string }> = {
  'monthly-twice': { title: 'Monthly • 2 Times (Lunch + Dinner)', price: `${formatINR(MONTHLY_PLANS.twice.price)} / month` },
  'monthly-once': { title: 'Monthly • 1 Time (Lunch OR Dinner)', price: `${formatINR(MONTHLY_PLANS.once.price)} / month` },
  single: { title: 'Single Tiffin', price: `${formatINR(SINGLE_TIFFIN_PRICE)} / dabba` },
}

const FREQUENCY_TO_PLAN: Record<Frequency, PlanId> = { once: 'monthly-once', twice: 'monthly-twice' }

function todayISO() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

const inputClass =
  'w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 aria-[invalid=true]:border-destructive'

export function OrderForm() {
  const { plan } = usePlanState()
  const orderType = plan === 'single' ? 'single' : 'monthly'
  const frequency: Frequency = plan === 'monthly-once' ? 'once' : 'twice'

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [errors, setErrors] = useState<Errors>({})
  const [minDate, setMinDate] = useState('')

  useEffect(() => {
    setMinDate(todayISO())
  }, [])

  const unitPrice = orderType === 'monthly' ? MONTHLY_PLANS[frequency].price : SINGLE_TIFFIN_PRICE
  const total = unitPrice * quantity

  function validate(): Errors {
    const next: Errors = {}
    if (name.trim().length < 2) next.name = 'कृपया तुमचं नाव लिहा.'
    if (!/^[6-9]\d{9}$/.test(mobile)) next.mobile = 'कृपया योग्य 10 अंकी mobile number लिहा.'
    if (location.trim().length < 3) next.location = 'कृपया delivery location लिहा.'
    if (!startDate) next.startDate = 'कृपया starting date निवडा.'
    return next
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0]
      document.getElementById(`order-${firstKey}`)?.focus()
      return
    }

    const frequencyText =
      orderType === 'monthly'
        ? `${MONTHLY_PLANS[frequency].label} (${MONTHLY_PLANS[frequency].meals})`
        : 'One-time (single tiffin)'

    const message = [
      `नमस्कार ${SITE.name}! मला डबा order करायचा आहे.`,
      '',
      `*Name:* ${name.trim()}`,
      `*Mobile:* ${mobile}`,
      `*Delivery location:* ${location.trim()}`,
      `*Order type:* ${orderType === 'monthly' ? 'Monthly Mess' : 'Single Tiffin'}`,
      `*Selected plan:* ${PLAN_LABELS[plan].title} — ${PLAN_LABELS[plan].price}`,
      `*Starting date:* ${formatDate(startDate)}`,
      `*Frequency:* ${frequencyText}`,
      `*Quantity:* ${quantity}`,
      `*Estimated total:* ${formatINR(total)}${orderType === 'single' ? ' + delivery' : ' / month (Delivery FREE)'}`,
      '',
      'Final delivery charge location नुसार confirm करा.',
    ].join('\n')

    window.open(whatsappHref(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5" aria-describedby="order-note">
      <div
        key={plan}
        className="flex animate-fade-up items-center gap-3 rounded-xl border border-primary/25 bg-secondary px-4 py-3"
        aria-live="polite"
      >
        <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-secondary-foreground/80">निवडलेला plan</p>
          <p className="truncate font-semibold text-foreground">{PLAN_LABELS[plan].title}</p>
        </div>
        <p className="shrink-0 font-heading text-primary">{PLAN_LABELS[plan].price}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="order-name" label="नाव" error={errors.name}>
          <input
            id="order-name"
            type="text"
            autoComplete="name"
            placeholder="तुमचं पूर्ण नाव"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'order-name-error' : undefined}
            required
            className={inputClass}
          />
        </Field>

        <Field id="order-mobile" label="Mobile number" error={errors.mobile}>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">+91</span>
            <input
              id="order-mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="10 अंकी नंबर"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              aria-invalid={Boolean(errors.mobile)}
              aria-describedby={errors.mobile ? 'order-mobile-error' : undefined}
              required
              className={cn(inputClass, 'pl-14')}
            />
          </div>
        </Field>
      </div>

      <Field id="order-location" label="Delivery location" error={errors.location}>
        <input
          id="order-location"
          type="text"
          autoComplete="street-address"
          placeholder="उदा. Kothrud, Karve Nagar, Hinjewadi Phase 1..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-invalid={Boolean(errors.location)}
          aria-describedby={errors.location ? 'order-location-error' : undefined}
          required
          className={inputClass}
        />
      </Field>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-foreground">Order type</legend>
        <div className="grid grid-cols-2 gap-3">
          <ChoiceCard
            name="orderType"
            value="monthly"
            checked={orderType === 'monthly'}
            onChange={selectMonthly}
            title="Monthly Mess"
            subtitle="₹1,999 पासून"
          />
          <ChoiceCard
            name="orderType"
            value="single"
            checked={orderType === 'single'}
            onChange={() => selectPlan('single')}
            title="Single Tiffin"
            subtitle="₹89 / dabba"
          />
        </div>
      </fieldset>

      {orderType === 'monthly' ? (
        <fieldset className="animate-fade-up">
          <legend className="mb-2 text-sm font-semibold text-foreground">Frequency</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {(['once', 'twice'] as Frequency[]).map((key) => (
              <ChoiceCard
                key={key}
                name="frequency"
                value={key}
                checked={frequency === key}
                onChange={() => selectPlan(FREQUENCY_TO_PLAN[key])}
                title={`${MONTHLY_PLANS[key].label} — ${formatINR(MONTHLY_PLANS[key].price)}`}
                subtitle={MONTHLY_PLANS[key].meals}
              />
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="order-startDate" label="Starting date" error={errors.startDate}>
          <input
            id="order-startDate"
            type="date"
            min={minDate || undefined}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            aria-invalid={Boolean(errors.startDate)}
            aria-describedby={errors.startDate ? 'order-startDate-error' : undefined}
            required
            className={inputClass}
          />
        </Field>

        <Field id="order-quantity" label="Quantity">
          <select
            id="order-quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={cn(inputClass, 'appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10')}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23626a66' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'डबा' : 'डबे'}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-charcoal px-5 py-4 text-charcoal-foreground">
        <span className="text-sm text-charcoal-foreground/70">
          Estimated total{orderType === 'single' ? ' (+ delivery)' : ' / month'}
        </span>
        <span className="font-heading text-2xl" aria-live="polite">
          {formatINR(total)}
        </span>
      </div>

      <p id="order-note" className="flex items-start gap-2 text-sm text-muted-foreground">
        <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        Final delivery charge will be confirmed based on your location.
      </p>

      <button
        type="submit"
        className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Send className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        WhatsApp वर order पाठवा
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function ChoiceCard({
  name,
  value,
  checked,
  onChange,
  title,
  subtitle,
}: {
  name: string
  value: string
  checked: boolean
  onChange: () => void
  title: string
  subtitle: string
}) {
  return (
    <label
      className={cn(
        'flex cursor-pointer flex-col rounded-xl border px-4 py-3 transition-all duration-200 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-primary/15',
        checked ? 'border-primary bg-secondary ring-1 ring-primary' : 'border-input bg-card hover:border-foreground/30',
      )}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <span
          aria-hidden="true"
          className={cn(
            'flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors',
            checked ? 'border-primary' : 'border-input',
          )}
        >
          {checked ? <span className="size-2 rounded-full bg-primary" /> : null}
        </span>
        {title}
      </span>
      <span className="mt-0.5 pl-6 text-xs text-muted-foreground">{subtitle}</span>
    </label>
  )
}
