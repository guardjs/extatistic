
import { execFile as exec } from 'child_process';

it('should start with offset [--from, -f]', () => {
  jest.mock('fs')
  jest.mock('../syntaxFeatures')
  jest.mock('../fileHandler')
  exec('node', ['./bin/cli', '--version'], (error, stdout) => {
    if (error) { throw error }
    console.log(stdout)
    done()
  })
})