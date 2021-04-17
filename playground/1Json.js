
const fs=require('fs')
const book={

    tittle:'Gamperaliya',
    author:'Martin Wickramashinghe'
}

// JSON.stringify() method is an inbuilt method to convert a json object to a string.
//Note:this is used because witeFileSync method only can write string objects to a file
//const bookJSON= JSON.stringify(book)

// console.log(bookJSON)
// console.log(typeof bookJSON)

// // JSON.parse() method is an inbuilt method to convert  a json string to a json object.
// const book1=JSON.parse(bookJSON)
// console.log(book1)
// console.log(typeof book1)

//writing json string object bookJSon to 'bookTXT
//fs.writeFileSync('bookTXT.txt',bookJSON)

// reading a text file and convert it to a json object
//fs.writeFileSync('book.json',bookJSON)
// const bufferData=fs.readFileSync('book.json') // .readFileSync doesnt return string data instead it returns binary data (unreadable)
// textData=bufferData.toString() // hence we have to convert bufferData toString

// console.log(textData)
// console.log(typeof textData)

// const obj1=JSON.parse (textData) // convert it into json object

// console.log(obj1)
// console.log(typeof obj1)

const bufferData= fs.readFileSync('book.json')
const textData=bufferData.toString()

const obj1=JSON.parse(textData)

//console.log(obj1.name,obj1.planet)
obj1.name="Buhuti"
obj1.planet="Mars"

const obj2=JSON.stringify(obj1)
fs.writeFileSync('book.json',obj2)








