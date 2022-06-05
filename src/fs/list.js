import * as fileSystem from 'fs';

export const list = async () => {
  const filePath = './files/';
  const errorMessage = 'FS operation failed';
  await fileSystem.readdir(filePath, (error, filNames) => {
    if (error) throw errorMessage;
    filNames.forEach((fileName) => console.log(fileName));
  });
};
