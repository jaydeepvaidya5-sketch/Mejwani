import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-10 items-center justify-center rounded-full bg-primary font-heading text-lg text-primary-foreground ring-2 ring-gold/50 ring-offset-2 ring-offset-background',
        className,
      )}
    >
      भू
    </span>
  )
}
