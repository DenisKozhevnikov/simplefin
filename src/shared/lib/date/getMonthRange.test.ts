import { getMonthRange } from './getMonthRange';

describe('getMonthRange', () => {
  it('returns correct range for January 2023', () => {
    const { start, end } = getMonthRange(2023, 0);
    expect(start).toBe('2023-01-01T00:00:00.000Z');
    expect(end).toBe('2023-01-31T23:59:59.999Z');
  });
  it('returns correct range for February of a non-leap year', () => {
    const { start, end } = getMonthRange(2023, 1);
    expect(start).toBe('2023-02-01T00:00:00.000Z');
    expect(end).toBe('2023-02-28T23:59:59.999Z');
  });
  it('returns correct range for February of a leap year', () => {
    const { start, end } = getMonthRange(2024, 1);
    expect(start).toBe('2024-02-01T00:00:00.000Z');
    expect(end).toBe('2024-02-29T23:59:59.999Z');
  });
}); 