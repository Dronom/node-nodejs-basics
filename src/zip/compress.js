import fs from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import path from "path";
import { fileURLToPath } from "url";

export const compress = async () => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__fileName);

  const gzip = createGzip();
  const readStream = fs.createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const writeStream = fs.createWriteStream(
    path.join(__dirname, "files", "archive.gz")
  );

  pipeline(readStream, gzip, writeStream, (err) => {
    console.log("aa", err);
  });
};

compress();
