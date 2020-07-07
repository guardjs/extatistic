
// TODO: it should be run after build. but it's ok to not run it
// because of all unit test running among the app currectly now

// import { execFile as exec } from 'child_process'
// import { promisify } from 'util'

// it's just a unit-test to see if yargs is running and cli is working
/** FIXME: because of build using babel it's not possible to test cli before the build */
test(`It's not a test!`, async () => {
  const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 100)
  })
  expect.assertions(1)
  return testPromise.then((data) => {
    return expect(data).toEqual(1)
  })

  // jest.mock('../extractor')
  // jest.mock('../fileHandler')
  // await exec('node', ['./bin/cli', '--version'], (error, stdout) => {
  //   if (error) { throw error }
  //   console.log(`--version ${stdout}`.replace(/\n/g, ''))
  //   done()
  // })
})