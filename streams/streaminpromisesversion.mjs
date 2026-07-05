import fs from "node:fs/promises";
import { pipeline } from "node:stream/promises";

console.time("Copy");

const source =
  "D:\\private\\phone photos 2\\video_20260112_211059.mp4";
const destination = "streamvideo.mp4";

const fileHandleRead = await fs.open(source, "r");
const fileHandleWrite = await fs.open(destination, "w");

try {
    const readStream = fileHandleRead.createReadStream();
    const writeStream = fileHandleWrite.createWriteStream();

    await pipeline(readStream, writeStream);

    console.log("✅ Copy completed");
}
finally {
    await fileHandleRead.close();
    await fileHandleWrite.close();

    console.timeEnd("Copy");
}
