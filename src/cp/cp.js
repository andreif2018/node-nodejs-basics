import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const childProc = fork('./files/script.js', args);
    childProc.send(process.stdin);
    childProc.on('message', (content) => {
      process.stdout.write('Printing received data from child process:' + content);
    });
  };

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
