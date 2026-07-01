const a = new ArrayBuffer(1.9 * 2024 * 2024 * 2024);
const views = new DataView(a);
for (let i = 0; i < views.byteLength; i++)views.setInt8(i,i+1);
console.log(views);