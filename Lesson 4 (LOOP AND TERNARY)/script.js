console.log("Yello");

//************************************ TERNARY OPERATOR (? :) ***************************************
const age = 18;

if (age >= 18) {
    console.log('You can drive');
}


const age2 =18

age2 >= 18 ?console.log("You can drive") :console.log("you are an underage");


//******************* EXAMPLE 2 *********************
const gender = "male";

if (gender === "Female") {
    console.log("Ola is a boy");
} else {
    console.log('Bola is a girl');
}


const gender2 = "male";

gender2 ==="male" ?console.log('Muaz is a boy') : console.log("Muaiza is a girl");



//************************************* LOOP **************************************

//******* WHILE LOOP
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let loading = 0 ;
while (loading < 150) {
    console.log('Website is still loading');
    loading ++;
}


// *****************FOR LOOP
for (let kanaz = 2; kanaz < 30; kanaz++) {
    console.log(kanaz);;
}



// ********EXAMPLES
const cohorts = ['Kenny', 'Ola', 'Ola1', 'Muhammed', 'Rocco', 'Kanaz']

for(cohort of cohorts) {
    console.log(`Hello Mr ${cohort}`);
}


for (cohort of cohorts) {
    if (cohort === 'Ola') {
        console.log(`Ola is in the list`);
    }
}


for (cohort of cohorts) {
    if (cohort === 'Rocco') {
        console.log(`${cohort} is here with the cohorts`);
    }
}


// ********ANOTHER EXAMPLE
let name = 'Director';
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));;     //(To write out character at a certain position)
}



