import { useSyncExternalStore } from 'react'

export type PlanId = 'monthly-twice' | 'monthly-once' | 'single'

type PlanState = {
  plan: PlanId
  lastMonthly: Exclude<PlanId, 'single'>
  pickedFromPricing: boolean
}

const INITIAL_STATE: PlanState = { plan: 'monthly-twice', lastMonthly: 'monthly-twice', pickedFromPricing: false }

let state = INITIAL_STATE
const listeners = new Set<() => void>()

export function selectPlan(plan: PlanId, fromPricing = false) {
  state = {
    plan,
    lastMonthly: plan === 'single' ? state.lastMonthly : plan,
    pickedFromPricing: fromPricing || state.pickedFromPricing,
  }
  listeners.forEach((listener) => listener())
}

export function selectMonthly() {
  selectPlan(state.lastMonthly)
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function usePlanState() {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => INITIAL_STATE,
  )
}
