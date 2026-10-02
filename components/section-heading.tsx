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
      <p className={cn('text-sm font-semibold tracking-wide', invert ? 'text-gold' : 'text-accent')}>{eyebrow}</p>
      <h2
        className={cn(
          'mt-3 font-heading text-3xl leading-tight sm:text-4xl',
          invert ? 'text-primary-foreground' : 'text-primary',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-base leading-relaxed', invert ? 'text-primary-foreground/75' : 'text-muted-foreground')}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
