import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const stream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);

  stream.on("data", (data) => process.stdout.write(data));
};

read();
