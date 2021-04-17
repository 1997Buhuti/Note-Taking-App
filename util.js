const myName="Buhuti Manakal";
console.log(myName);
//modules.export function is the function you used  to import necessary 
//resources(Variables,functions,objects) to other files

module.exports=myName;

const add= function(num1,num2){

    return num1+num2;
}
module.exports=add;

const getnotes= function(){

    return "Here is your notes...";
}

module.exports=getnotes;