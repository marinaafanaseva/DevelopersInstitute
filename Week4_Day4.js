//Exercise 1
const studentObj = {
    first: 'Elie', 
    last:'Schoppik'    
};

function printFullName ({first, last}) {
   console.log(`Your full name is ${first} ${last}`);
}
printFullName(studentObj);

//Exercise 2
const EasterObj = {memoryEvent: 'exodusFromEgypt', time: 'spring', currentEvent: 'HaggadahReading', food: ['matzo', 'wine']}

EasterKeyArr = Object.keys(EasterObj);
console.log(EasterKeyArr);
keysABC = EasterKeyArr.sort();                           //Sort by keys         

//EasterObj = Object.fromEntries({keyABC, value});    //concatenate Obj - why it doesn't work ??
//console.log(EasterObj);
//console.log(`${keyABC}: ${value}`);    