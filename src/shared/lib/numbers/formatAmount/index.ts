import { Decimal } from "decimal.js";

const amountFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/**
 * example: 1,234,567.89
 */
export function formatAmount(value: number | string): string {
  const decimal = new Decimal(value).abs().toNumber();
  return amountFormatter.format(decimal);
}
