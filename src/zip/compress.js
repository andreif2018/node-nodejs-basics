import * as zip from "zlib";
import * as fileSystem from 'fs';

export const compress = async () => {
  const handleZip = zip.createGzip();
  const sourceFile = fileSystem.createReadStream('./files/fileToCompress.txt');
  const resultFile = fileSystem.createWriteStream('./files/archive.gz');
  await sourceFile.pipe(handleZip).pipe(resultFile);
};
