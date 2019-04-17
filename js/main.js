$("#leopardhome").backstretch("images/home_page.jpg");

$("#container").backstretch("images/trees.jpg");

var mlink = document.getElementById("hunting"),
    mdiv = document.getElementById("huntinghide");
mlink.addEventListener("click",
  function(event) {
    event.preventDefault();
    mdiv.style.display = (mdiv.style.display ==="none") ? "block" : "none";
  }, false
);
mdiv.style.display ="none";

var vlink = document.getElementById("breeding"),
    vdiv = document.getElementById("breedinghide");
vlink.addEventListener("click",
  function(event) {
    event.preventDefault();
    vdiv.style.display = (vdiv.style.display ==="none") ? "block" : "none";
  }, false
);
vdiv.style.display ="none";

var clink = document.getElementById("spots"),
    cdiv = document.getElementById("spotshide");
clink.addEventListener("click",
  function(event) {
    event.preventDefault();
    cdiv.style.display = (cdiv.style.display ==="none") ? "block" : "none";
  }, false
);
cdiv.style.display ="none";

//RANDOM FACTS- FACTS PAGE

var facts = [
"Most leopards are light coloured and have dark spots on their fur. These spots are called “rosettes” because their shape is similar to that of a rose. There are also black leopards, too, whose spots are hard to see because their fur is so dark.",
"Leopards can be found in various places around the world – they live in Sub-Saharan Africa, northeast Africa, Central Asia, India and China.",
"Leopards are fast felines and can run at up to 58km/h! They’re super springy, too, and can leap 6m forward through the air – that’s the length of three adults lying head to toe!",
"Leopards are very solitary and spend most of their time alone. They each have their own territory, and leave scratches on trees, urine scent marks and poop to warn other leopards to stay away! Males and females will cross territories, but only to mate."
];

var q_p = document.getElementById("random_fact");
var rand_int = Math.floor(Math.random()*4); // THis gets random to return a total of 4 numbers .floor is strippin decimals
q_p.innerHTML = facts[rand_int];


//RANDOM FACTS- THREATS PAGE

/* var facts_threats = [
"These big cats have a varied diet and enjoy different kinds of grub. They eat bugs, fish, antelope, monkeys, rodents, deer…in fact, pretty much any prey that is available!",
"Leopards are skilled climbers, and like to rest in the branches of trees during the day. They are strong beasts, too, and can carry their heavy prey up into the trees so that pesky scavengers, such as hyenas, don’t steal their meal!",
"Nocturnal animals, leopards are active at night when they venture out in search for food. They mostly spend their days resting, camouflaged in the trees or hiding in caves."
];

var para = document.getElementById("threatfacts");
var rand_three = Math.floor(Math.random()*3); // THis gets random to return a total of 3 numbers
para.innerHTML = facts_threats[rand_three]; */
