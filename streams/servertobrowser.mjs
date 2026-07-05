import http from "node:http";
import fs from "node:fs/promises";
import { pipeline } from "node:stream/promises";

http
  .createServer(async (req, res) => {
    if (req.method === "GET" && req.url === "/") {
      const file = await fs.open(
        "D:\\private\\phone photos\\Ful oboi.jpg",
        "r",
      );

      try {
          res.setHeader("Content-Type", "image/jpeg");
          res.setHeader("Content-Length", (await file.stat()).size);
          res.setHeader("Content-Disposition", "inline; filename=Ful oboi.jpg");
        await pipeline(file.createReadStream(), res);
      } finally {
        await file.close();
      }
    }
    else if (req.method === "GET" && req.url === "/video") {
      let file;
      console.log(req.method, req.url, req.headers.range);
      try {
        file = await fs.open(
          "D:\\private\\phone photos 2\\VID-20250330-WA0184.mp4",
          "r",
        );

        res.setHeader("Content-Type", "video/mp4");

        await pipeline(file.createReadStream(), res);
      } catch (err) {
        console.error(err);
      } finally {
        if (file) await file.close();
      }
    }
  })
  .listen(3000);

