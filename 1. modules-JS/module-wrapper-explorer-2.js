console.log("\nmodule-explore  filename", __filename);
console.log("\nmodule-explore  dirname", __dirname);
console.log("module-explorer");

// actual local scope in node js looks like
// this local scope is wrapped by wrapper function 
(function wrapper(module,require,exports,__filename,__dirname)
{
// this is local scope of whole code ;
})() 


module.exports = {
  greeting(name) {
    console.log(`hello my name is ${name}`);
  },
};
