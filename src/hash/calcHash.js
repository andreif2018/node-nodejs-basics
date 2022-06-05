import * as crypto from "crypto";
import * as fileSystem from "fs";

export const calculateHash = async () => {
  await fileSystem.readFile('./files/fileToCalculateHashFor.txt', 'utf8', (error, fileContent) => {
    if (error) throw error;
    const result = crypto.createHash('sha256').update(fileContent);
    console.log(result.digest('hex'));
  });
};
