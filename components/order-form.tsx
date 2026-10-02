'use client'

import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Info, Send } from 'lucide-react'
import { MONTHLY_PLANS, SINGLE_TIFFIN_PRICE, formatINR, whatsappHref } from '@/lib/site'
import { PLAN_EVENT, type PlanId } from '@/components/plan-link'
import { cn } from '@/lib/utils'

type OrderType = 'monthly' | 'single'
type Frequency = keyof typeof MONTHLY_PLANS

type Errors = Partial<Record<'name' | 'mobile' | 'location' | 'startDate', string>>

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
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 aria-[invalid=true]:border-destructive'

export function OrderForm() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [location, setLocation] = useState('')
  const [orderType, setOrderType] = useState<OrderType>('monthly')
  const [frequency, setFrequency] = useState<Frequency>('twice')
  const [startDate, setStartDate] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [errors, setErrors] = useState<Errors>({})
  const [minDate, setMinDate] = useState('')

  useEffect(() => {
    setMinDate(todayISO())
    function handlePlan(event: Event) {
      const plan = (event as CustomEvent<PlanId>).detail
      if (plan === 'single') {
        setOrderType('single')
      } else {
        setOrderType('monthly')
        setFrequency(plan === 'monthly-once' ? 'once' : 'twice')
      }
    }
    window.addEventListener(PLAN_EVENT, handlePlan)
    return () => window.removeEventListener(PLAN_EVENT, handlePlan)
  }, [])

  const total = useMemo(() => {
    const unit = orderType === 'monthly' ? MONTHLY_PLANS[frequency].price : SINGLE_TIFFIN_PRICE
    return unit * quantity
  }, [orderType, frequency, quantity])

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
        ? `${MONTHLY_PLANS[frequency].label} (${MONTHLY_PLANS[frequency].meals}) — ${formatINR(MONTHLY_PLANS[frequency].price)}/month`
        : `Single tiffin — ${formatINR(SINGLE_TIFFIN_PRICE)}/dabba`

    const message = [
      'नमस्कार भूक संघटना! मला डबा order करायचा आहे.',
      '',
      `*Name:* ${name.trim()}`,
      `*Mobile:* ${mobile}`,
      `*Location:* ${location.trim()}`,
      `*Order type:* ${orderType === 'monthly' ? 'Monthly Mess' : 'Single Tiffin'}`,
      `*Starting date:* ${formatDate(startDate)}`,
      `*Frequency:* ${frequencyText}`,
      `*Quantity:* ${quantity}`,
      `*Estimated total:* ${formatINR(total)}${orderType === 'single' ? ' + delivery' : ''}`,
      '',
      'Final delivery charge location नुसार confirm करा.',
    ].join('\n')

    window.open(whatsappHref(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5" aria-describedby="order-note">
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
            onChange={() => setOrderType('monthly')}
            title="Monthly Mess"
            subtitle="₹1,999 पासून"
          />
          <ChoiceCard
            name="orderType"
            value="single"
            checked={orderType === 'single'}
            onChange={() => setOrderType('single')}
            title="Single Tiffin"
            subtitle="₹89 / dabba"
          />
        </div>
      </fieldset>

      {orderType === 'monthly' ? (
        <fieldset className="animate-fade-up">
          <legend className="mb-2 text-sm font-semibold text-foreground">Frequency</legend>
          <div className="grid grid-cols-2 gap-3">
            {(Object.keys(MONTHLY_PLANS) as Frequency[]).map((key) => (
              <ChoiceCard
                key={key}
                name="frequency"
                value={key}
                checked={frequency === key}
                onChange={() => setFrequency(key)}
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
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23556b5a' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
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

      <div className="flex items-center justify-between rounded-2xl bg-secondary/70 px-5 py-4">
        <span className="text-sm text-secondary-foreground">
          Estimated total{orderType === 'single' ? ' (+ delivery)' : ' / month'}
        </span>
        <span className="font-heading text-2xl text-primary" aria-live="polite">
          {formatINR(total)}
        </span>
      </div>

      <p id="order-note" className="flex items-start gap-2 text-sm text-muted-foreground">
        <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
        Final delivery charge will be confirmed based on your location.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Send className="size-4" aria-hidden="true" />
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
        'flex cursor-pointer flex-col rounded-xl border px-4 py-3 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/30',
        checked ? 'border-primary bg-primary/5' : 'border-input bg-background hover:border-primary/40',
      )}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <span
          aria-hidden="true"
          className={cn(
            'flex size-4 shrink-0 items-center justify-center rounded-full border',
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
