import fileSystem from "fs";

export const rename = async () => {
  const sourcePath = './files/wrongFilename.txt';
  const dirPath = './files/properFilename.md';
  const errorMessage = 'FS operation failed';
  await fileSystem.access(sourcePath, fileSystem.constants.F_OK, (error) => {
    if (error) throw errorMessage;
  });
  await fileSystem.access(dirPath, fileSystem.constants.F_OK, (error) => {
    if (error) {
      fileSystem.rename(sourcePath, dirPath, (error) => {
        if (error) throw errorMessage;
      });
    }
    else {
      throw errorMessage;
    }
  });
};
