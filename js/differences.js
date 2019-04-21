$("#container").backstretch("images/trees.jpg");

//RANDOM FACTS- THREATS PAGE

var facts_differences = [
"When it comes to hunting for food, these big cats know their stuff! When a leopard spots a potential meal, it approaches with legs bent and head low, so as not to be seen. It then stalks its prey carefully and quietly, until it’s five to ten metres within range. Then…. pounce! The leopard dashes forward and takes down its victim with a bite to the throat or neck. Small prey, such as small birds or mice, will receive a fatal blow from the feline’s paw. Ouch!",
"Female leopards give birth any time of the year – when they do, they usually give birth to two or three cubs. Mothers stay with their cubs until they are about two years old, when they are old enough to hunt and take care of themselves.",
"Leopards communicate with each other through distinctive calls. For instance, when a male wants to make another leopard aware of his presence, he’ll make a hoarse, raspy cough. They also growl when angry and, like domestic cats, purr when happy and relaxed. Cute, eh?"
];

var para = document.getElementById("differencesfacts");
var rand_three = Math.floor(Math.random()*3); // THis gets random to return a total of 3 numbers
para.innerHTML = facts_differences[rand_three];

//LETTER SPACING

$('.titles').on('mouseenter', function(){
  $(this).toggleClass('spaced');
});
