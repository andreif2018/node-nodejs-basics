import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
  const childProc = fork('./files/script.js', args);
  childProc.send(process.stdin);
  childProc.on('message', (content) => {
    process.stdout.write('Printing received data from child process:' + content);
  });
};
