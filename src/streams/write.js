import * as fileSystem from 'fs';

const write = async () => {
    const wrStream = fileSystem.createWriteStream('./files/fileToWrite.txt');
    wrStream.on('error', (error) => {
      console.log(`error: ${error.message}`);
      throw error;
    });
    wrStream.write(process.stdin.toString(), 'base64');
    wrStream.on('finish', () => {
      console.log('done');
    });
    wrStream.end();
};

await write();