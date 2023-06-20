import * as fileSystem from 'fs';

const read = async () => {
  const filePath = './files/fileToRead.txt';
  const errorMessage = 'FS operation failed';
  await fileSystem.readFile(filePath, 'utf8', (error, fileContent) => {
    if (error) throw errorMessage;
    console.log(fileContent);
  }); 
};

await read();