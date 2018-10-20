const READLINE = require("readline-sync");
let library={
	greeting: "Hey, what are you doing, breathing so loud? Well, welcome to the library, what do you want?",
	aisle: "Oh that book. That will be in the shelves over there, next to the  shelf with workings from J.K. Rowling, Neil deGrasse Tyson, and Masashi Kishimoto have a good day"
};
let books={
	name:"Harry Potter & Chamber of Secrets by J.K. Rowling",
	series:"Volume 2",
	name2:"Boruto: Naruto Next Generations by Masashi Kishimoto",
	name3:"Katekyo Hitman Reborn by Akira Amano"
};
let shelf={
	number:"Number 2",
	letter:"Section Fiction"
};
let listOfBooks=[
books.name, 
books.name2, 
books.name3];
let x= READLINE.question(`${library.greeting}`);
console.log(`${x} Yeah, we have that, as well as ${listOfBooks}. These can all be found in ${shelf.letter}`);