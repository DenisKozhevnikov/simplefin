import { getMonthName } from './getMonthName';

describe('getMonthName', () => {
  it('returns correct month name for 0 (January)', () => {
    expect(getMonthName(0)).toBe('January');
  });
  it('returns correct month name for 11 (December)', () => {
    expect(getMonthName(11)).toBe('December');
  });
  it('works correctly for all months', () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    months.forEach((name, idx) => {
      expect(getMonthName(idx)).toBe(name);
    });
  });
}); 