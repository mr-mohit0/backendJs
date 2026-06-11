const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'example');
if (!fs.existsSync(filePath))
{
    fs.mkdirSync(filePath);
}
const file = path.join(filePath, 'example.js');
fs.writeFileSync(file, 'console.log("hello world")');
const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log(fileContent);
 
fs.appendFileSync(filePath, '\nconsole.log(`Appended Line`)');

const updatedContent = fs.readFileSync(filePath, 'utf-8');
console.log(updatedContent);

// now start async way to make folder and file operations
const asyncDataFolder = path.join(dataFolder, "asyncData.txt");
console.log(asyncDataFolder);
fs.writeFile(asyncDataFolder, 'hello writing asyc file writing', (err) => { if (err) throw err;
    console.log('Async file created');
});
fs.writeFile(asyncDataFolder, '\nAppending new line in async way', { flag: 'a' }, (err) => {
    if (err) throw err;
    console.log('Async file appended');
});
fs.readFile(asyncDataFolder, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Async file content:', data);
});