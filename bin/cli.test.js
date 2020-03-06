
import { execFile as exec } from 'child_process';

it('should start with offset [--from, -f]', () => {
  exec('node', ['./cli', '--version'], (error, stdout) => {
      if (error) { throw error }
      console.log(stdout);
  })
})