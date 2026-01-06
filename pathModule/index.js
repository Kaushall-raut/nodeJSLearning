const path = require("path");

// console.log("returns file name with their absolute path",__filename);

// console.log("does not return file name returns only directory name with their root paths",__dirname);

// console.log("join method",path.join('kaushal','raut'));   //usefull when you want to create or redirect path or create a file or folder with a customize file path

// console.log("return path of the directory in which this directory is present ",path.resolve());

// console.log("normalize file path in simple use to convert the path name into proper format",path.normalize("folder//file"));

// console.log("used to check whether the path is absolute or relative",path.isAbsolute(__dirname));

// console.log("return current filename",path.basename(__filename));

// console.log("return directory name ",path.dirname('folder/file'));

// console.log("return extension name ",path.extname(__filename));

// console.log("represent the data in object format ",path.parse(__filename));

obj = path.parse(__filename);

// console.log("convert the object into path ",path.format(obj));

// ! path.win32 used to manipulate files according to windows rule

//! path.posiX  used to manipulate files according to linux and mac rules
