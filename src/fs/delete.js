import fs from "fs";

export const remove = async () => {
  const error = new TypeError("FS operation failed");
  const fileName = "fileToRemove.txt";
  try {
    fs.rm(`files/${fileName}`, {}, (err) => {
      if (err?.code === "ENOENT") {
        throw error;
      }
    });
  } catch (err) {
    console.log(err);
  }
};

remove();
