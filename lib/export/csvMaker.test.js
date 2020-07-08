// const csvMaker, { save } = require('./csvMaker')
const error = require('../common/errorMessages.js')
const fs = jest.genMockFromModule('fs')


beforeEach(() => {
  jest.resetModules();
  jest.resetAllMocks();
})

test('Call append file', () => {
  // ? TODO: add mock
  // save('hi', 'data')
  // const spyOnAppenFile = jest.spyOn(fs, "appendFile");
  // expect(spyOnAppenFile.mock.calls).toEqual([]);
})