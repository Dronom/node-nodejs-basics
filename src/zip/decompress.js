import fs from "fs";
import { createUnzip } from "zlib";
import path from "path";
import { fileURLToPath } from "url";

export const decompress = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__fileName);

  const readStream = fs.createReadStream(
    path.join(__dirname, "files", "archive.gz")
  );

  const writeStream = fs.createWriteStream(
    path.join(__dirname, "files", "fileToCompress2.txt")
  );

  readStream.pipe(createUnzip()).pipe(writeStream);
};

decompress();
