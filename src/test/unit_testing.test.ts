import { sum } from '../my-components/unit_testing';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(sum(-2, 3)).toBe(1);
  });

  it('should handle zero', () => {
    expect(sum(0, 3)).toBe(3);
  });
});