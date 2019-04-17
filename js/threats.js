$("#container").backstretch("images/trees.jpg");

//RANDOM FACTS- THREATS PAGE

var facts_threats = [
"These big cats have a varied diet and enjoy different kinds of grub. They eat bugs, fish, antelope, monkeys, rodents, deer…in fact, pretty much any prey that is available!",
"Leopards are skilled climbers, and like to rest in the branches of trees during the day. They are strong beasts, too, and can carry their heavy prey up into the trees so that pesky scavengers, such as hyenas, don’t steal their meal!",
"Nocturnal animals, leopards are active at night when they venture out in search for food. They mostly spend their days resting, camouflaged in the trees or hiding in caves."
];

var para = document.getElementById("threatfacts");
var rand_three = Math.floor(Math.random()*3); // THis gets random to return a total of 3 numbers
para.innerHTML = facts_threats[rand_three];
