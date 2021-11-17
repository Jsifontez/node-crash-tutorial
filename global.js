// Global object
// here in node window is not the global object. Here the global object is 'global'

// console.log(global);

// global.setTimeout(() => {
// Same as browser You can avoid explicily type 'global.' just do:
// setTimeout(() => {
//   console.log('in the time out')
//   clearInterval(int)
// }, 3000);

// const int = setInterval(() => {
//   console.log('in the interval')
// }, 1000)

// another thing available with node is dirname and filename
console.log(__dirname); // return the absolute path where the current file is
console.log(__filename); // return the absolute path of the folder with the file name
