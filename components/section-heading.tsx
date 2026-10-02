import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  invert = false,
}: {
  eyebrow: string
  title: string
  description?: string
  className?: string
  invert?: boolean
}) {
  return (
    <Reveal className={cn('mx-auto max-w-2xl text-center', className)}>
      <p
        className={cn(
          'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]',
          invert ? 'text-charcoal-foreground/70' : 'text-primary',
        )}
      >
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
      </p>
      <h2
        className={cn(
          'mt-4 font-heading text-3xl leading-tight tracking-tight sm:text-[2.75rem]',
          invert ? 'text-charcoal-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            invert ? 'text-charcoal-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
