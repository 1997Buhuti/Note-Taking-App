const fs = require('fs')
const chalk= require('chalk')
const yargs=require('yargs')
const notes= require('./notes.js')
const { title } = require('process')

console.log(yargs.argv)
yargs.version('1.0.0')


//creating custom commands for yargs

// adding a new note

yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{

            describe:'Note Title',
            demandOption:true,
            type:String
        },

        body:{
            describe:'Note Body',
            demandOption:true,
            type:String,
            passedText:function(args){
                console.log(args)
            }

        }
    },
    handler(argv){

        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({

    command:'remove',
    describe:'remove note',
    handler: function(){
        console.log('removing the note')
    },

    builder:{
        title:{

            describe:'Note Title',
            demandOption:true,
            type:String
        }
    },

    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'read note',
    builder:{

        title:{
            describe:'Note title',
            demandOption:true,
         
             type:String
        }
    },
    /*es5 handeler
    handler: function(){
        console.log('reading the note')
    }*/

    //es6 handler
    handler(argv){
        notes.readNotes(argv.title)
    }

})

yargs.command({
    command:'list',
    describe:'list note',
    handler(){
        notes.listNote()
    }

})

yargs.parse();