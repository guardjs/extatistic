
import { execFile as exec } from 'child_process';

test('should start with offset [--from, -f]', async done => {
  jest.mock('fs')
  jest.mock('../syntaxFeatures')
  jest.mock('../fileHandler')
  await exec('node', ['./bin/cli', '--version'], (error, stdout) => {
    if (error) { throw error }
    console.log(stdout)
    done()
  })
})