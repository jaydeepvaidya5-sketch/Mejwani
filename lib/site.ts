export const SITE = {
  name: 'भूक संघटना',
  tagline: 'घरच्या जेवणाची गोष्ट',
  phone: '7972961693',
  phoneDisplay: '+91 79729 61693',
  whatsapp: '917972961693',
}

export const telHref = `tel:+91${SITE.phone}`

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const MENU_ITEMS = [
  { name: '4 Chapati', marathi: '४ चपाती', note: 'मऊ, ताज्या घडीच्या पोळ्या' },
  { name: 'Bhaji', marathi: 'भाजी', note: 'रोज बदलणारी हंगामी भाजी' },
  { name: 'Varan + Bhat', marathi: 'वरण + भात', note: 'साधं, पोटभर वरण-भात' },
  { name: 'Salad', marathi: 'सॅलड', note: 'काकडी, टोमॅटो, कांदा' },
]

export const MONTHLY_PLANS = {
  once: { label: '1 time/day', marathi: 'दिवसातून १ वेळ', price: 1999, meals: 'Lunch OR Dinner' },
  twice: { label: '2 times/day', marathi: 'दिवसातून २ वेळा', price: 3599, meals: 'Lunch + Dinner' },
} as const

export const SINGLE_TIFFIN_PRICE = 89

export const DELIVERY_SLABS = [
  { range: '0–1 km', price: 'FREE', highlight: true },
  { range: '1–5 km', price: '₹29', highlight: false },
  { range: '5+ km', price: '₹49', highlight: false },
]

export function formatINR(value: number) {
  return `₹${value.toLocaleString('en-IN')}`
}
