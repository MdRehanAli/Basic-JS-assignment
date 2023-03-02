// 2. Check whether the given file name is a javaScript file or not.

function isJavaScriptFile(fileName) {
    // data type check 
    if (typeof fileName !== 'string') {
        return 'Please Enter a string!';
    }

    const files = fileName.endsWith('.js');
    return files;
}

const fileName = 'javascript.js';
const file = isJavaScriptFile(fileName);
console.log(file);