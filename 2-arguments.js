/*const name= ['lisoletu', 'lina']

if (name.length === 0) {
  console.log('No argument');
};


/*else if (name.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
};*/

function noofarguments(...args){
  const count = args.length; 
  if (count.length === 0) {
  console.log('No argument');
} else if (count.length === 1) {
  console.log('Argument found', args[0]);
} else {
  console.log(`${count} Arguments found `);
};
}
noofarguments('pear', '6'); 
