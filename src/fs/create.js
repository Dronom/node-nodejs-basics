import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const error = new TypeError("FS operation failed");
  const filePath = `${__dirname}/files/fresh.txt`;

  try {
    fs.open(filePath, "r", (err) => {
      if (err?.code === "ENOENT") {
        fs.writeFile(filePath, "I am fresh and young", () => {
          console.log("done");
        });
      } else {
        throw error;
      }
    });
  } catch (err) {
    console.log(err);
  }
};

create();
