// include the module whose functions are to be overridden
var fs = require('fs');

// delete the function you would like to override
delete fs['readFile'];

// add new functional with the same name as deleted function
fs.readFile = (str)=>{
  console.log("The functionality has been overridden.");
  console.log(str);
}

// re-export the module for changes to take effect
module.exports = fs

// you may use the newly overriden function
fs.readFile("sample.txt");
