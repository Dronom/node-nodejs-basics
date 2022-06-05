import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const stream = fs.createWriteStream(
    path.join(__dirname, "/files", "fileToWrite.txt")
  );

  process.stdout.write(
    "Please input your text. When you want to exit - press Ctrl+C \n"
  );
  process.stdin.on("data", (data) => {
    stream.write(data);
  });
};

write();
