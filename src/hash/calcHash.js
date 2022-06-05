import fs from "fs";
import crypto from "crypto";

export const calculateHash = async () => {
  const fileContent = await fs
    .readFileSync(`files/fileToCalculateHashFor.txt`, (err) => {
      console.log("err", fileContent);
    })
    .toString();
  console.log("fileContent", fileContent);

  const hash = crypto.createHash("sha256").update(fileContent).digest("hex");

  return hash;
};

calculateHash();
