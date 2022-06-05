import * as fileSystem from 'fs';

export const remove = async () => {
  const filePath = './files/fileToRemove.txt';
  const errorMessage = 'FS operation failed';
  await fileSystem.unlink(filePath, (error) => {
    if (error) throw errorMessage;
  });
};
