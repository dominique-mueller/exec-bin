#!/usr/bin/env node

import { spawn } from 'child_process';
import { argv } from 'process';

// Run executable
spawn(argv[2], argv.slice(3), {
  stdio: 'inherit',
}).on('exit', (code) => {
  process.exit(code);
});
