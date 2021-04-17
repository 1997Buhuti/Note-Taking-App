const { default: chalk } = require('chalk')
const fs= require('fs')

const addNote= (title,body)=>{
    
    const notes= loadNotes()

    //const duplicateNotes=notes.filter((note)=>{return note.title===title})
    //The above mrthod has one issue the filter method filter array element on by one even if it finds
    //a duplicate it wont stops until it filters all the elements in the whole array

    //(Solution):- Use .find method in array

    const duplicatenote= notes.find((note)=> note.title===title)

    debugger
    if(!duplicatenote){
        notes.push({
            title:title,
            body: body
        })
    
        saveNotes(notes)
    }

    else{

        console.log('Note title is already taken')
    }
    
    

}

const saveNotes=(notes)=>{

    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const getNote= ()=>{
    console.log('get')
}

const listNote= ()=> {

    const notes=loadNotes()
    console.log(chalk.green('here is your Notes list'))

    notes.forEach((note) => {
        console.log(chalk.cyan(note.title))
    })

}

const loadNotes= ()=>{

    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){ 
        return []
    }
    
}

const readNotes= (title)=>{
    const notes=loadNotes()

    const readNote= notes.find((note)=>note.title===title)

    if(readNote){
        console.log(chalk.bgBlue.inverse(readNote.title))
        console.log(readNote.body)
    }
    else{
        console.log(chalk.bgRed.inverse('error: couldnt find the note'))
    }
    

    
}

const removeNote= (title)=>{
    const notes=loadNotes()

    const newNotes=notes.filter((note)=>{

        return note.title!==note.title
    })

    if(notes.length>newNotes.length){

        console.log(chalk.blue('Note Removed'))
        saveNotes(newNotes)
    }

    else{
        console.log(chalk.red('Error There is no such Note'))
    }
}
module.exports= {

    addNote:addNote,
    getNote:getNote,
    removeNote:removeNote,
    listNote:listNote,
    readNotes:readNotes
}