let spy = {
	firstName: "James",
	isSpy: true,
	lastName: "Bond"
};

let hacker = {
	realName: "Kristian Ofori",
	codeName: "KaioKid",
	catchphrase: "I don't fight for self-preservation, but for my friends!",
	archEnemy: "Jihatsu Akuma"

};

let villain = {
	name: "Jihatsu Akuma",
	catchphrase: "Me! The world should only concern me! Everyone else can go to hell! HAHAHAHAHA!",
	greatestCrime: "brain-washing everyone to treat him as God, and almost succeeding"
};
console.log(`Hey it's me ${hacker.realName}! Welcome to the hacker team known as Team Edge! I am your superior so call me by my code name ${hacker.codeName}. I am not known for my physical prowess, but for my heroism, my catchphrase being ${hacker.catchphrase}. My arch enemy is ${hacker.archEnemy}. ${villain.name}is one of the greatest villains of all. His greatest crime was ${villain.greatestCrime}, and his goals were known from an interview in prison. He said, and I quote, "${villain.catchphrase}". Are you ready to help me beat him? Alright then, let's go!`);