// why we use strems , we use stream because if we wnats to read a 4 gb video file from hard disk , we use the readfile() and then we load the whole 4 gb file data into the ram  in the form of buffer  , use our ram size will inceases  , so to overcome this  problem , we learns the stream for efficient memmory uses


// import fs from 'fs/promises'
// console.time();
// const filedata = await fs.readFile('D:\\private\\phone photos 2\\video_20260112_211059.mp4');
// console.log(filedata.byteLength)
// console.timeEnd();
// await fs.writeFile('processedvideo.mp4', filedata); // this kind of file reading is the over head for ram ,here we cant read the file thats size is more than 2 gib , so below we sees the streams practicaly how it works

// console.time()
// import ffs from 'fs'
// const readstream = ffs.createReadStream("D:\\private\\phone photos 2\\video_20260112_211059.mp4", { highWaterMark: 17*1024 * 1024 });//by default 65536 bytes
// let a = 0;
// readstream.on('data', (bufferchunk) => {
//       // console.log(bufferchunk)
//       console.log(++a," ",bufferchunk.byteLength);
//       ffs.appendFileSync('stremvideo.mp4',bufferchunk);
// })
// console.timeEnd();
// //(18,39,35,575)


// progress bar 
import fs, { createReadStream, createWriteStream } from "node:fs";
import { finished, pipeline,Duplex } from "node:stream";

// const source = "D:\\private\\phone photos 2\\video_20260112_211059.mp4";
// const destination = "streamvideo.mp4";

// // Total file size
// const { size: totalSize } = fs.statSync(source);

// // 10 MB chunk size
// const readStream = fs.createReadStream(source, {
//   highWaterMark: 10 * 1024 * 1024,
// });

// let bytesRead = 0;

// console.time("Read Time");
// // readStream.on('')
// readStream.on("data", (chunk) => {
//   bytesRead += chunk.length;

//   // Write chunk
// //   fs.appendFileSync(destination, chunk);

//   // Percentage
//   const percentage = ((bytesRead / totalSize) * 100).toFixed(2);

//   // Progress bar
//   const width = 30;
//   const filled = Math.floor((percentage / 100) * width);
//   const bar =
//     "█".repeat(filled) + "-".repeat(width - filled);

//   // Rewrite same terminal line
//   process.stdout.write(
//     `\r[${bar}] ${percentage}% (${(bytesRead / 1024 / 1024).toFixed(
//       2
//     )} MB / ${(totalSize / 1024 / 1024).toFixed(2)} MB)`
//   );
// });

// readStream.on("end", () => {
//   console.log("\n\n✅ Reading Complete");
//   console.timeEnd("Read Time");
// });

// readStream.on("error", (err) => {
//   console.error(err);
// });










///////////////////////////////////// read and  writeable stream both


// const source = "D:\\private\\phone photos 2\\video_20260112_211059.mp4";
// const destination = "streamvideo.mp4";

// // Total file size
// const { size: totalSize } = fs.statSync(source);

// // 10 MB chunk size
// const readStream = fs.createReadStream(source, {
//   highWaterMark: 10 * 1024 * 1024,
// });

// const writestrem = fs.createWriteStream(destination,{highWaterMark:10*1024*1024});

// let bytesRead = 0;

// console.time("Read Time");
// // readStream.on('')
// readStream.on("data", (chunk) => {
//   bytesRead += chunk.length;

//   // Write chunk
//       //   fs.appendFileSync(destination, chunk);
      
//       writestrem.write(chunk);

//   // Percentage
//   const percentage = ((bytesRead / totalSize) * 100).toFixed(2);

//   // Progress bar
//   const width = 30;
//   const filled = Math.floor((percentage / 100) * width);
//   const bar =
//     "█".repeat(filled) + "-".repeat(width - filled);

//   // Rewrite same terminal line
//   process.stdout.write(
//     `\r[${bar}] ${percentage}% (${(bytesRead / 1024 / 1024).toFixed(
//       2
//     )} MB / ${(totalSize / 1024 / 1024).toFixed(2)} MB)`
//   );
// });

// readStream.on("end", () => {
//   console.log("\n\n✅ Reading Complete");
//   console.timeEnd("Read Time");
// });

// readStream.on("error", (err) => {
//   console.error(err);
// });





/////////////////////// backpressuring in writable stream


// const source = "D:\\private\\phone photos 2\\video_20260112_211059.mp4";
// const destination = "streamvideo.mp4";

// // Total file size
// const { size: totalSize } = fs.statSync(source);

// // 10 MB chunk size
// const readStream = fs.createReadStream(source, {
//   highWaterMark: 10 * 1024 * 1024,
// });

// const writestrem = fs.createWriteStream(destination,{highWaterMark:10*1024*1024});

// let bytesRead = 0;

// console.time("Read Time");
// // readStream.on('')
// readStream.on("data", (chunk) => {
//   bytesRead += chunk.length;

//   // Write chunk
//       //   fs.appendFileSync(destination, chunk);
//       // writestrem.write(chunk);
//       const isempty = writestrem.write(chunk);
//       if (!isempty) readStream.pause();//this is backressuring

//   // Percentage
//   const percentage = ((bytesRead / totalSize) * 100).toFixed(2);

//   // Progress bar
//   const width = 30;
//   const filled = Math.floor((percentage / 100) * width);
//   const bar =
//     "█".repeat(filled) + "-".repeat(width - filled);

//   // Rewrite same terminal line
//   process.stdout.write(
//     `\r[${bar}] ${percentage}% (${(bytesRead / 1024 / 1024).toFixed(
//       2
//     )} MB / ${(totalSize / 1024 / 1024).toFixed(2)} MB)`
//   );
// });

// writestrem.on('finish',()=>{console.log('finished')});
// writestrem.on('close',()=>{console.log('closed !')});
// writestrem.on('drain', () => {
//       readStream.resume();
// }) // this is backpressuring

// readStream.on("end", () => {
//   console.log("\n\n✅ Reading Complete");
//   console.timeEnd("Read Time");
// });

// readStream.on("error", (err) => {
//   console.error(err);
// });
// // writestrem.end();










//// ok so , to handle the backptresuring and the manual writing and writestreams
// we use the automates pip () to automate these tasks



// const source = "D:\\private\\phone photos 2\\video_20260112_211059.mp4";
// const destination = "streamvideo.mp4";
// console.time();
// // Total file size
// const readStream = fs.createReadStream(source, {
//     highWaterMark: 10 * 1024 * 1024
// });
// const writeStream = fs.createWriteStream(destination);
// readStream.pipe(writeStream);   // ✅ Only once
// const { size: totalSize } = fs.statSync(source);

// let bytesRead = 0;

// readStream.on("data", (chunk) => {
//     bytesRead += chunk.length;
 
//    const percentage = ((bytesRead / totalSize) * 100).toFixed(2);

//   // Progress bar
//   const width = 30;
//   const filled = Math.floor((percentage / 100) * width);
//   const bar =
//     "█".repeat(filled) + "-".repeat(width - filled);

//   // Rewrite same terminal line
//   process.stdout.write(
//     `\r[${bar}] ${percentage}% (${(bytesRead / 1024 / 1024).toFixed(
//       2
//     )} MB / ${(totalSize / 1024 / 1024).toFixed(2)} MB)`
//   );
// });


// readStream.on('end', () => {
//   console.log('\n\n')
//   console.timeEnd();
// })
////////////////////////this pip method does not handle the errors
// handle the error whene the streams is piping then how to handle errors






////////////////////////////////////////////////


// // pipline method
// const source = "D:\\private\\phone photos 2\\video_20260112_211059.mp4";
// const destination = "streamvideo.mp4";
// const readstrem = createReadStream(source,{highWaterMark:10*1024*1024});
// const writestrem = createWriteStream(destination,{highWaterMark:10*1024*1024});

// pipeline(readstrem, writestrem, (err) => {
//   err ? console.log(err) : 'not any error';
// })






