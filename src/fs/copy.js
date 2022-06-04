import fs from "fs";

export const copy = async () => {
  const error = new TypeError("FS operation failed");

  try {
    fs.open("files", "r", (err) => {
      {
        if (err) {
          throw error;
        }
      }
    });

    fs.mkdir("files_copy", (err) => {
      if (err.code === "EEXIST") {
        throw error;
      }
    });

    fs.readdir("files", (err, files) => {
      if (err) {
        console.log("err", err);
      }
      files.forEach((file) => {
        fs.copyFile(`files/${file}`, `files_copy/${file}`, (err) => {
          console.log(err);
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
};

copy();
