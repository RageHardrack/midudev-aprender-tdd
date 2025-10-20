import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/can-reconfigure'

describe('canReconfigure', () => {
  // ! TEST Cubierto
  //   it("should be a function", () => {
  //     expect(typeof canReconfigure).toBe("function");
  //   });

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow('from must be a string')
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow('from must be a string')
  })

  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a', 2)).toThrow('to must be a string')
  })

  it('should return a boolean', () => {
    expect(typeof canReconfigure('a', 'b')).toBe('boolean')
  })

  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('abc', 'de')).toBe(false)
  })

  it('should return false if strings provided have different length even with same unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
