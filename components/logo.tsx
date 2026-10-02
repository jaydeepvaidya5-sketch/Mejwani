import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative flex size-10 items-center justify-center rounded-xl bg-primary font-heading text-lg text-primary-foreground',
        className,
      )}
    >
      मे
      <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-accent ring-2 ring-background" />
    </span>
  )
}
