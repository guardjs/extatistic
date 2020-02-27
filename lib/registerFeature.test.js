

import app from './registerFeature';
import errors from './errorMessages.json'

test('Add a new feature', () => {
  expect(typeof app([], () => 2)).toBe('undefined')
})

test('Should throw error "Primitive type"', () => {
  expect(() => { app([], () => { }) }).toThrow(errors['primitive type']);
})

test('Should throw error "Primitive type"', () => {
  expect(() => { app([], () => { }) }).toThrow(errors['primitive type']);
})
