import modules from "module";
import { nums } from "./es62.mjs";
// console.log(modules)
// console.log(import.meta)
console.log(import.meta.dirname);
console.log(import.meta.filename);
console.log(import.meta.main);
// console.log(import.meta.resolve())
// console.log(import.meta.url(import.meta.dirname))
console.log(process.env);

////common js modules always load syncronusly
//but es6 mudules are loads async
//in es6 module file extention must to access any module using inport

/*| Feature                            | ES6 Modules (ESM)                                                      | CommonJS (CJS)                                                    |
| ---------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **1. Import/Export Syntax**        | Uses `import` and `export` keywords.                                   | Uses `require()` and `module.exports`/`exports`.                  |
| **2. Loading Behavior**            | **Static** (imports are analyzed before execution).                    | **Dynamic** (modules are loaded when `require()` executes).       |
| **3. Execution Time**              | Imports are resolved before the code runs.                             | `require()` executes during runtime.                              |
| **4. Browser Support**             | Supported natively in modern browsers using `<script type="module">`.  | Not supported directly in browsers; mainly used in Node.js.       |
| **5. Tree Shaking**                | Supported because imports are static. Bundlers can remove unused code. | Difficult because `require()` is dynamic.                         |
| **6. Top-level `await`**           | Supported.                                                             | Not supported in CommonJS modules.                                |
| **7. Export Behavior**             | Exports are **live bindings** (changes are reflected automatically).   | Exports are copied as the value assigned to `module.exports`.     |
| **8. File Recognition in Node.js** | Uses `.mjs` or `"type": "module"` in `package.json`.                   | Uses `.cjs` or the default `.js` when `"type"` is not `"module"`. |
 */
   