import fileSystem from "fs"

export const read = async () => {
  const filePath = './files/fileToRead.txt';
  const errorMessage = 'FS operation failed';
  fileSystem.readFile(filePath, 'utf8', (error, fileContent) => {
    if (error) throw errorMessage;
    console.log(fileContent);
  });
};
