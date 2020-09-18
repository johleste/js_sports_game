/*
Button constants
*/
const resetButton = document.querySelector ("#reset-button")
const teamOneShootButton = document.querySelector ("#teamone-shoot-button")
const teamTwoShootButton = document.querySelector ("#teamtwo-shoot-button")
/*
Data constants from HTML
*/
const numResets = document.querySelector("#num-resets");
const teamOneNumShots = document.querySelector ("#teamone-numshots");
const teamOneNumGoals = document.querySelector ("#teamone-numgoals");
const teamTwoNumShots = document.querySelector ("#teamtwo-numshots");
const teamTwoNumGoals = document.querySelector ("#teamtwo-numgoals");
/*
Data variables to pull data from
*/
let count1 = 0;
let count2 = 0;
let gcount1 = 0;
let gcount2 = 0;
let shotacc = 0;
let rcount = 0;
/*
Team 1 Shoot Button
*/
teamOneShootButton.addEventListener ("click", function () {


console.log('Team One Shoots');
count1 += 1;
console.log(count1)
teamOneNumShots.innerHTML = count1;
let shotacc = Math.floor((Math.random() * 100) + 1);
console.log (shotacc);
if (shotacc > 55){
    console.log ("score")    
gcount1 += 1;
teamOneNumGoals.innerHTML = gcount1;
}
})

/*
Team2 Shoot Button
*/
teamTwoShootButton.addEventListener ("click", function () {
 

console.log('Team Two Shoots');
count2 += 1;
console.log(count2);
teamTwoNumShots.innerHTML = count2;
let shotacc = Math.floor((Math.random() * 100) + 1);
console.log (shotacc);
if (shotacc > 55){
    console.log ("score")    
gcount2 += 1;
teamTwoNumGoals.innerHTML = gcount2;

}
})
/*
Reset button
*/
resetButton.addEventListener("click", function () {
count1 = 0;
count2 = 0;
teamOneNumShots.innerHTML = count1;
teamOneNumGoals.innerHTML = count1;
teamTwoNumGoals.innerHTML = count1;
teamTwoNumShots.innerHTML = count1;
rcount += 1;
numResets.innerHTML=+ rcount;
console.log("reset")
})
