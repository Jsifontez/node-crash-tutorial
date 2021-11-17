const fs = require('fs');

// fs.createReadStream allow you to read chunks of data. It receive 2 arguments
// fs.createReadStream(the relative path of the directory, {encoding: to received in readable format})
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' })
// fs.createWriteStream allow you to write chunks of data while reading
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// the 'on' is a event listener of readStream
// this allow to liste a data event. When the function receive a 'chunk' of data. And every time that chunk is received, is executed the callback func
// readStream.on('data', (chunk) => {
//   console.log('------------NEW CHUNK------------')
//   console.log(chunk)
//   writeStream.write('\nNEW CHUNK\n')
//   writeStream.write(chunk)
// })

// piping
readStream.pipe(writeStream)
