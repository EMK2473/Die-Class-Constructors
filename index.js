const DSix = require('./dSix');
const DEight = require('./dEight');
const DTwenty = require('./dTwenty');

const myDSix = new DSix();
myDSix.roll();
const myDEight = new DEight();
myDEight.roll();
const myDTwenty = new DTwenty();
myDTwenty.roll();


console.log("D6 Rolls:", myDSix.dieRollValueA, ',', myDSix.dieRollValueB);
console.log("Sum: ", myDSix.createSumRoll());
console.log("Min:", myDSix.createMinRoll());
console.log("Max:", myDSix.createMaxRoll());
console.log("D8 Rolls:", myDEight.dieRollValueA, ',', myDEight.dieRollValueB);
console.log("Sum: ", myDEight.createSumRoll());
console.log("Min:", myDEight.createMinRoll());
console.log("Max:", myDEight.createMaxRoll());
console.log("D20 Rolls:", myDTwenty.dieRollValueA, ',', myDTwenty.dieRollValueB);
console.log("D20 Sum: ", myDTwenty.createSumRoll());
console.log("Min:", myDTwenty.createMinRoll());
console.log("Max:", myDTwenty.createMaxRoll());

