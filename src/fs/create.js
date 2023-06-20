import * as fileSystem from 'fs';

const create = async () => {
    const filePath = './files/fresh.txt';
  const fileContent = 'I am fresh and young';
  const errorMessage = 'FS operation failed';
  await fileSystem.access(filePath, fileSystem.constants.F_OK, (error) => {
    if (error) {
      fileSystem.appendFile(filePath, fileContent, (error) => {
        if (error) {
          throw new Error(errorMessage);
        }
        else {
          console.log(`File ${filePath.slice(-10)} has been created with content: ${fileContent}`);
        }
      });
    } else {
      throw new Error(errorMessage);
    }
  });
};

await create();