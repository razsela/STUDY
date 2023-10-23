console.log('Hello!')
let x = 1
let y = 2
console.log(`${x} + ${y} = ${x+y}`);
function multiply(a,b) {
    console.log(`${a} * ${b} = ${a*b}`);
}

multiply(3,5)

const os = require('os')
console.log(`Free memory: ${os.freemem / 1024 / 1024 / 1024}GB`)
console.log(`Total memory: ${os.totalmem()/ 1024 / 1024 / 1024}GB`)
console.log(`Operating system: ${os.platform}`)
console.log(`OS version: ${os.version}`)
console.log(` CPU Architecture: ${os.arch}`)
console.log(`Home Directory: ${os.homedir}`)

const cpus = os.cpus();
console.log(` : ${cpus.length}`)
