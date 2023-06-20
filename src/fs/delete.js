import * as fileSystem from 'fs';

const remove = async () => {
  const filePath = './files/fileToRemove.txt';
  const errorMessage = 'FS operation failed';
  await fileSystem.unlink(filePath, (error) => {
    if (error) throw errorMessage;
  });
};

await remove();