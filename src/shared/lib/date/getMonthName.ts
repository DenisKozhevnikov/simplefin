export function getMonthName(month: number): string {
  return new Date(2000, month).toLocaleString("en-US", { month: "long" });
}
