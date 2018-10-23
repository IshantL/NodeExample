console.log('starting App');

const fs= require('fs');
const _= require('lodash');

const notes= require('./notes.js');

var command =process.argv[2];
console.log(process.argv);
console.log('command',command);

if(command==='add'){
	console.log("adding new note");
}else if(command === 'list'){
	console.log('listing all notes');
}else if(command === 'read'){
	console.log('reading all notes');
}else if(command === 'remove'){
	console.log('removing all notes');
}else{
	console.log('command not recognise');
}