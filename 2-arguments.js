/*const name= ['lisoletu', 'lina']

if (name.length === 0) {
  console.log('No argument');
};


/*else if (name.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
};*/

let input = prompt ('Enter arguments separated by spaces:');
let args = input ? input.trim().split(" "): [];

if (args.length===0 || args[0] === " "){
  console.log ('No argument');
}
  else if(args.length===1) {
  console.log ('Argument found');
} else {
  console.log ('Argument found')
}; 

