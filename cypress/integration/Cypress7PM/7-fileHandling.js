const fs = require('fs');
const dirpath = "./file-repo/";
const filepath = "./file-repo/me.txt";

// sync ---- blocking in nature
// async ---- non - blocking in nature

// readWrite , writeFile , rename , delete , fileexisit, append

//progrom 1
let obj = fs.readFileSync(filepath,{encoding:"utf8"})
console.log(obj)

//program 2
console.log(fs.existsSync(filepath))

if(fs.existsSync(filepath)){
    console.log(obj)
}
else {
    console.log(`${filepath} does not exist`)
}

//program3

if(fs.existsSync(dirpath)){
    fs.writeFileSync(filepath,"hello i am learning python")
}
else {
    console.log(`${dirpath} does not exist`)
}

if(fs.existsSync(dirpath)){
    fs.writeFileSync(filepath,"\n hello i am learning js2",{flag:'a'})
}
else {
    console.log(`${dirpath} does not exist`)
}

if(fs.existsSync(dirpath)){
    fs.appendFileSync(filepath,"\n hello i am learning cloud")
}
else {
    console.log(`${dirpath} does not exist`)
}


if(fs.existsSync(dirpath)){
    fs.renameSync(filepath,"./file-repo/me.txt")
}
else {
    console.log(`${dirpath} does not exist`)
}

if(fs.existsSync(dirpath)){
    fs.unlinkSync(filepath)
}
else {
    console.log(`${dirpath} does not exist`)
}