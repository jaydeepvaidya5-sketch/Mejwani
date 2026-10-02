'use client'

import type { ReactNode } from 'react'

export type PlanId = 'monthly-twice' | 'monthly-once' | 'single'

export const PLAN_EVENT = 'bhook:select-plan'

export function PlanLink({ plan, className, children }: { plan: PlanId; className?: string; children: ReactNode }) {
  return (
    <a
      href="#order"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent<PlanId>(PLAN_EVENT, { detail: plan }))}
    >
      {children}
    </a>
  )
}
