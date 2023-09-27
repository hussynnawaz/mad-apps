// Program 1
class Car
    {       
        constructor(name)
        {
          this.brand = name;
        }

        display()
        {
            console.log(this.brand);
        }
    }

    
   const mycar = new Car("Ford");
    mycar.display();
    console.log(mycar.brand);
    console.log(mycar instanceof Car);  
    console.log(mycar instanceof Object);
// Program 2 Inheritance Example

class Car{
     constructor(name)
     {
            this.brand = name;
     }
        present()
        {
                return 'I have a '+this.brand;
        }
}
    class Model extends Car{
        constructor(name,mod){
            super(name);
            this.model = mod;
        }
    }
    mycar = new Model("Ford","Mustang");
    console.log(mycar.present());
// Program 3 One Arguement Function
function Show (str)
{
    alert("This is " + str);
}
Show("JavaScript");
// Program 4 Return A Value From Function
function Show (str)
{
    return str;
}
alert(Show("JavaScript"));
// Program 5 Alternate way of defining a regular function
show = function (){
    return "Hello World";
}
alert (show());
// Program 6 Arrow Function
show = () => {
    return "Hello World";
}
// Program 7 Passing Arguement to Arrow Function
show = (str1, str2) => {
    return str1 + "" + str2;
} 
alert (show("Hello","World"));
// Program 8 Arrow function with single statement
show = () => "Hello World";
alert (show());
// Program 9 We can remove parenthesis from arrow functions if single argument is passed
show = mystr => "Hello " + mystr;
alert (show("World"));
// Program 10 JavaScript Map Function 
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
//method 1 
const newArr1  = myArray.map((item) => item * 10);
for (let item of newArr1) {
    console.log(item);
}
//method 2
const newArr2 = myArray.map(function(item) {
    return item * 10;
});
for (let item of newArr2) {
    console.log(item);
}
//import React from 'react';

function MyComponent() {
  // Program 11: Calling a method with a button
  function myFunction() {
    alert("Button is Clicked");
  }

  // Program 12: Calling method with a button using event listener
  class Car {
    constructor(name) {
      this.brand = name;
    }

    display() {
      console.log(this.brand);
    }
  }

  const mycar = new Car("Ford");
  mycar.display();

  const myFunction = () => {
    alert("Button is Clicked");
  }

  const handleButtonClick = () => {
    myFunction();
  }

  // Program 13: JavaScript map method example with a normal function
  const myArray = [1, 2, 3, 4, 5];
  const newArr = myArray.map(function (item) {
    return item * 10;
  });

  for (let item of newArr) {
    console.log(item);
  }

  return (
    <div>
      {/* Program 11 button */}
      <button onClick={myFunction}>Click Me</button>

      {/* Program 12 button */}
      <button id="myBtn" onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}
// Program 14: JavaScript map method example with an arrow function
const myArray = [1, 2, 3, 4, 5];
const newArr = myArray.map((item) => item * 10);
console.log(newArr);
// Program 16 JavaScript Map Function in ReactJS
import React from 'react'

function JavaScriptMapFunction() {
    const colors = ["Red", "Green", "Blue", "Yellow", "White", "Black"];
    const newColors = colors.map((item) => <li>{item}</li>);

  return (
    <>
    <div>
        <h1>JavaScript Map Function in React JS</h1>
       
    </div>
    </>
  )
}

export default JavaScriptMapFunction