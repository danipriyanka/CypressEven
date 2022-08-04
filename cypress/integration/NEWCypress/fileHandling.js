//Javascript --

const fs=require('fs')  
const folderPath='./MyFiles'
const filePath='./MyFiles/first.txt'

// fs.readFile()               //asynch    //callback
// fs.readFileSync()           //synch
//Diff bet readFile() and readFileSync()
//fs.readFileSync(filePath,encoding)
//read,write,copy,makedir,unlink,exists,rename,append
let file=fs.readFileSync(`${filePath}`,'utf8')
console.log(file)

let bool=fs.existsSync(`${filePath}`)
console.log(bool)

// if(bool){
//      fs.writeFileSync(`${filePath}`,'My name is Priyanka')
// }else{
//     console.log(`${filePath} is not there`)
// }
// if(bool){
//     fs.writeFileSync(`${filePath}`,'\n My lastname is Dani',{flag:'a'})
// }else{
//    console.log(`${filePath} is not there`)
// }
// if(bool){
//     fs.appendFileSync(`${filePath}`,'\n I love Music')
// }else{
//     console.log(`${filePath} is not there`) 
// }

// if(bool){
//     fs.renameSync(`${filePath}`,'./MyFiles/Second.txt')
// }
// console.log(bool)
// fs.renameSync('./MyFiles/Second.txt','./MyFiles/first.txt')

// if(bool){
//     fs.mkdirSync('./MyFiles2')
// }else{
//     console.log("Unable to create new folder")
// }

// if(bool){
//     fs.copyFileSync(`${filePath}`,'./MyFiles/sec.txt')
// }else{
//     console.log("File is not copied")
// }

if(bool){
    fs.unlinkSync(`${filePath}`)
}else{
    console.log(`${filePath} is not there`)
}
console.log(bool)

















