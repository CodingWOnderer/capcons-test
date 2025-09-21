export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function formatMoney({
  amount,
  currency = "USD",
}: {
  amount: number
  currency?: string
}): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount / 100) // Assuming amount is in cents
}
