import * as fileSystem from 'fs';

export const copy = async () => {
  const sourcePath = './files/';
  const dirPath = './files_copy/';
  const errorMessage = 'FS operation failed';
  await fileSystem.access(sourcePath, fileSystem.constants.F_OK, (error) => {
    if (error) throw errorMessage;
  });
  await fileSystem.mkdir(dirPath,{ recursive: false }, (error) => {
    if (error) throw errorMessage;
    fileSystem.readdir(sourcePath, (error, filNames) => {
      if (error) throw errorMessage;
      filNames.forEach((fileName) => {
        fileSystem.copyFile(sourcePath + fileName, dirPath + fileName, (error) => {
          if (error) throw error;
          console.log(`${sourcePath + fileName} was copied to ${dirPath + fileName}`);
        });
      })
    });
  });
};
