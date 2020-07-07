import app from './registerFeature';
import errors from '../../common/errorMessages'
import { describe } from 'yargs';

describe("Should check new feature before registeration!")
test('Should add a new fixed feature', () => {
  expect(typeof app(() => 2)).toBe('function')
})
test('Should add a new dynamic feature', () => {
  expect(typeof app((str) => str.length > 3 ? 'yes' : 'no')).toBe('function')
})
test('Should throw error "Functon type"', () => {
  expect(() => { app(2) }).toThrow(errors['function type']);
})
test('Should throw error "Primitive type"', () => {
  expect(() => { app(() => { }) }).toThrow(errors['primitive type']);
})
