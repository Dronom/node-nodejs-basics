import fs from "fs";

export const read = async () => {
  const error = new TypeError("FS operation failed");
  const fileName = "fileToRead.txt";

  fs.readFile(`files/${fileName}`, (err, data) => {
    if (err?.code === "ENOENT") {
      throw error;
    }
    console.log("data", data.toString());
  });
};

read();
