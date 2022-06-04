import fs from "fs";

export const rename = async () => {
  const error = new TypeError("FS operation failed");
  const oldName = "wrongFilename.txt";
  const newName = "properFilename.md";

  try {
    fs.open(`files/${oldName}`, "r", (err) => {
      if (err?.code === "ENOENT") {
        throw error;
      }
    });

    fs.open(`files/${newName}`, "r", (err) => {
      if (!err) {
        throw error;
      }
    });

    fs.rename(`files/${oldName}`, `files/${newName}`, (err) => {
      if (!err) {
        throw error;
      }
    });
  } catch (err) {
    console.log(err);
  }
};

rename();
