// the file system module allow you to read, write, delete files and create and delete directories
// to do that you need the core module filesystem of node
const fs = require('fs');

// reading files
// fs.readFile(relative path to the file, a function to execute when the file is read)
// readFile is asynchronous
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(ee)
//   }
//   // console.log(data) // this way just return a buffer of the data
//   // to be able to read the data use toString method
//   console.log(data.toString())
// })

// writing files

// to write file we use the writeFile method of fs, which take 3 arguments. This method is asynchronous
// fs.writeFile(relative path of the file, the text to write, a callback function)
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//   console.log('file was written')
// })

// // if the file pass in the first argument doesn't exit node create the file
// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//   console.log('file was written')
// })

// directoires

// to create a directory you use the method mkdir of fs passing the relative path with the name of the directory. This also is an asynchronous function and need a callback
// before to try to create a directory check if this already exist
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder created')
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted')
  })
}

// deleting files
// to delete files you use de 'unlink' method of 'fs' module

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  })
}
