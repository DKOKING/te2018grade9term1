// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let changeMachine = {
	greeting: "Hey there stranger what can I do for your money today?",
	bye: "Have a good day stranger and remember, capitalism is flawed!",
	quarters:undefined, 
	dimes:undefined, 
	nickels:undefined, 
	pennies:undefined
};

// write code below that simulates the change machine in action!
let x = READLINE.question(`${changeMachine.greeting}`);
let q = Math.floor(x/25);
let q2 = Math.floor(x%25);
let d = Math.floor(q2/10);
let d2 = Math.floor(q2%10);
let n = Math.floor(d2/5);
let n2 = Math.floor(d2%5);
let p = Math.floor(n2/1);
changeMachine.quarters=q;
changeMachine.nickels=n;
changeMachine.dimes=d;
changeMachine.pennies=p; 
console.log(`${changeMachine.greeting} Oh you want ${x}c. Ok then that will be ${changeMachine.quarters} quarters, ${changeMachine.dimes} dimes, ${changeMachine.nickels} nickels, and ${changeMachine.pennies} pennies. ${changeMachine.bye}`);