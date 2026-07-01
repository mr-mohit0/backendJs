import fs from "fs";
setInterval(async () => {
  await fs.writeFile("./time.txt",new Date().toLocaleTimeString(), (error) => {
      if (error) console.log('error => ',error.message)
  });
}, 1000);
