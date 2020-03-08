
import { execFile as exec } from 'child_process';

// it's just a unit-test to see if yargs is running and cli is working
test('should start and show version', async done => {
  jest.mock('../extractor')
  jest.mock('../fileHandler')
  await exec('node', ['./bin/cli', '--version'], (error, stdout) => {
    if (error) { throw error }
    console.log(`--version ${stdout}`.replace(/\n/g, ''))
    done()
  })
})