import zip from "zlib";
import fileSystem from "fs";

export const decompress = async () => {
  const handleZip = zip.createUnzip();
  const sourceFile = fileSystem.createReadStream('./files/archive.gz');
  const resultFile = fileSystem.createWriteStream('./files/fileToCompress.txt');
  await sourceFile.pipe(handleZip).pipe(resultFile);
};
