import fs from "fs";

export const list = async () => {
  const error = new TypeError("FS operation failed");

  fs.readdir("files", (err, files) => {
    if (err?.code === "ENOENT") {
      throw error;
    }
    console.log("files", files);
  });
};

list();
