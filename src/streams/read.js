import * as fileSystem from 'fs';

const read = async () => {
    const rdStream = fileSystem.createReadStream('./files/fileToRead.txt');
    rdStream.on('error', (error) => {
      console.log(`error: ${error.message}`);
      throw error;
    })
    rdStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
};

await read();