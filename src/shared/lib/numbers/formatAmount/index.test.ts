import { formatAmount } from './index';

describe('formatAmount', () => {
  it('formats a positive number', () => {
    expect(formatAmount(1234.56)).toBe('1,234.56');
  });
  it('formats a string-number', () => {
    expect(formatAmount('9876543.21')).toBe('9,876,543.21');
  });
  it('formats a negative number as positive', () => {
    expect(formatAmount(-42)).toBe('42.00');
  });
  it('formats 0', () => {
    expect(formatAmount(0)).toBe('0.00');
  });
}); 