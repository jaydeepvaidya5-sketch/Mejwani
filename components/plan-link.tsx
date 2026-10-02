'use client'

import type { ReactNode } from 'react'
import { selectPlan, type PlanId } from '@/lib/plan-store'

export function PlanLink({ plan, className, children }: { plan: PlanId; className?: string; children: ReactNode }) {
  return (
    <a href="#order" className={className} onClick={() => selectPlan(plan, true)}>
      {children}
    </a>
  )
}
