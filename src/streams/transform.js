import { Transform, pipeline } from "stream";

export const transform = async () => {
  process.stdout.write("Input your text: \n");

  const readable = process.stdin;
  const writable = process.stdout;
  const transformFn = new Transform({
    transform(chunk, enc, callback) {
      const chunkToString = chunk.toString().trim();
      const reversedChunk = chunkToString.split("").reverse().join("");

      callback(null, reversedChunk + "\n");
    },
  });

  pipeline(readable, transformFn, writable, (err) => {
    console.log("err");
  });
};

transform();
