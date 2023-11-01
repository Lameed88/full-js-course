// ARROW FUNCTION

const name1 = () => {
  console.log("I love the name");
};
name1();

const select = () => {
  const sentence = console.log("I love the word");
  return sentence;
};
select();

//******* EXAMPLE 1
const sayHi = (firstName) => {
  console.log(`Hi, ${firstName}`);
};

sayHi("Joe");

//******* */ EXAMPLE 2
const logAge = (name, age) => {
  console.log(`${name} is ${age} years old`);
};

logAge("Joe", 25);

// *************************************************************************** SCOPE **************************************************************************************

//************************* GLOBAL SCOPE *********************************
const name2 = "John";

const logName = () => {
  console.log(name2);
};

logName();

//************ ANOTHER EXAMPLE (ADVANTAGES)
const name3 = "Kanaz";
const globalScope = () => {
  console.log(name3);
};

const globalScope2 = () => {
  console.log(name3);
};

globalScope();
globalScope2();

// *************ANOTHER EXAMPLE (DISADVANTAGES)
let name4 = "Rocco";

const logName1 = () => {
  console.log(name4);
  name4 = "Muhammed";
};

logName1();
console.log(name4);

//************************* LOCAL SCOPE *********************************
const someFunction = () => {
  const name = "Ola";
  console.log(name);
};

someFunction();
// console.log(name);

// ***************ANOTHER EXAMPLE
const someFunction1 = () => {
  const name = "Yemi";
  console.log(name);

  const anotherFunction = () => {
    console.log(name);
  };
  anotherFunction();
};

someFunction1();

// *****************ANOTHER EXAMPLE
const someFunction2 = () => {
  const name = "John";
  console.log(name);
};
const anotherFunction1 = () => {
  const name = "Kanas";
  console.log(name);
};

someFunction2();
anotherFunction1();

// **************************BLOCK SCOPE ****************************
if (true) {
  const name = "Suberu";
  console.log(name);
}

// *************************************************************************** HOISTING **************************************************************************************

var hoisting;
console.log(hoisting);

//********** EXAMPLE
function hoist() {
  var message = "Something";
  console.log(message);
}
hoist();

// **********EXAMPLE
console.log(num);
var num;

// **********EXAMPLE
function hoisted() {
  var message = "Hoisting is cool";
  console.log(message);
}

hoisted();

// hoisting();

function hoisting() {
  console.log("this function has been hoisted");
}

hoisting();


// *************************************************************************** CLOSURE **************************************************************************************
// ******* EXAMPLE 
const outer = () => {
    const outerVar = 'Hello';

    const inner = () => {
        const innerVar ='Hi';
        console.log(outerVar, innerVar);
    }
    return inner
}
// outer()()
const innerFn = outer();
innerFn();


//******** EXAMPLE
const init = () => {
    const hobby = "Learning javaScript";
    const displayHobby = () => {
        console.log(hobby);
    }
    displayHobby()
}
init()


//******* EXAMPLE 
const thirdExample = () => {
    const example = "example 3";
    console.log(example);
    const anotherFn = () => {
        const example2 = "example 4";
        console.log(example2);
        const anotherFn2 = () => {
            const example3 = "example 5"
            console.log(example3);
        }
        anotherFn2();
    }
    anotherFn();
}
thirdExample();



//****** EXECUTION CONTEXT 
// JAVASCRIPT SINGLE THREADED