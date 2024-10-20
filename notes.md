# Notes For CS 260  
Bottom right for vscode git hotbar  

Common HTML structural elements include body, header, footer, main, section, aside, p, table, ol/ul, div, and span  

Hyperlink  
\<div>\<a href=https://www.byu.edu> BYU\</a>\</div>  
List  
\<ul>  
  \<li>List\</li>  
  \<li>List\</li>  
  \<li>List\</li>  
\</ul>  
Table      
\<table>  
  \<tr>  
    \<th>Table\</th>  
    \<th>Table\</th>  
    \<th>Table\</th>  
  \</tr>  
  \<tr>  
  \<td>table\</td>  
  \<td>table\</td>  
  \<td>table\</td>  
  \</tr>  
  \<tr>  
    \<td>HTML\</td>  
    \<td>CSS\</td>  
    \<td>JavaScript\</td>  
  \</tr>  
  \</table>  
  Image  
  \<img src="https://upload.wikimedia.org/wikipedia/en/f/f7/RickRoll.png" alt="Man on Street" width="500" height="600">  

- A link element creates a relationship to another page or resource. This is how we tell the site which css to use, link to other pages, or connect to resources for the page.  
- The div tag is a wrapper and makes a new line. It is commonly used as a container to hold html elements, then styled with CSS. 
- In CSS, id's are keyed to  with #idname, while classes are keyed to with .classname.  
Padding affects the space in an element block, moving content away from the edges and changing size.  
- Margin affects the space outside element block, between it and other elements.  
- The flex argument makes a flexbox for the element. The element canthen be aligned vertically, justified horizontally, flexed in the horizontal (row) or vertical (column) direction. flex-wrap allows an image to wrap to new lines if the container becomes small. Flex-shrink and flex-basis affect how much space a container takes up relative to the other elements in the container. By default, the syntax for flex is flex: <flex-grow> <flex-shrink> <flex-basis>.  
- Units: pixels (px), points (pt), inches (in), centimeters (cm), percent of parent (%), width of parent font m (em), width of root font m (rem), height of element font (ex), percentage of viewport width (vw), percentage of viewport height (vh), percentage of viewport smaller dimension (vmin), percentage of viewports larger dimension (vmax).  
- const sayHello = () => console.log('Hello!'); syntax for an arrow function in JS. They also cannot construct objects and keep the "this" context of the scope.
- The map() method creates a new array by applying the function to each entry in an array.
- document.getElementById("ID") retrieves an HTML element using its id.
- element.addEventListener() attaches an event handler to an element, like when there is a click or a mouseover. Then the second is a function to execute when the event occurs.
- document.querySelector('#elementID') returns an element that has this ID. JS can then change the html content or style and can add event listeners.
- DOM: The Document Object Model. An object representation of HTML that browser uses to make display. It also allows us to manipulate the HTML. It is accessed with the "document" variable. You can inject HTML into the DOM, but to prevent attacks use DOM manipulation functions, not "innerHTML". Some of theses are event listeners.
- By default, the span is inline. It does not create a new line.
- CSS is boxes (inside->out): content->padding->border->margin
- HTML tags: Paragraph \<p>, Ordered List \<ol>, Unordered List \<ul>, first level heading \<h1>, second \<h2>, third \<h3> <script> tag is for JS inclusion
- It is possible to add properties to JS objects by force (obj.prop="val" or obj\[prop]="val")
- JSON: Java-Script Object Notation.
- Linux commands: chmod (changes file permissions), pwd (print working directory), cd (change directory), ls (list files and directories), vim (opens vim editor), nano (opens nano editor), mkdir (makes directory), mv (moves files/directories), man (gives manual for a command), ssh (connects to secure shell remote server), ps (prints active processes), wget (downloads files from web), sudo (super do).  
- subdomain.root.topleveldomain eg startup.tnak3.click
- DNS A record:  maps a domain to a specific IP address. It cannot point to another A record, but CNAME records can.
- Ports and Protocols: 443 (HTTPS), 80 (HTTP), 22 (SSH/SecureShell
```javascript, html, css examples
<!DOCTYPE html>

div {
  background-color: red;
}

<img alt="Checkmark" width="30" height="30" src="https://www.publicdomainpictures.net/pictures/130000/velka/check-mark-icon.jpg" />

const element = document.getElementById("byu");
element.style.color = "green";

if (condition1) {
  
} else if (condition2) {
  
} else {
  
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (condition) {
  // code to be executed
}

do {
  // code to be executed
} while (condition);

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}

const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
}

// Example
const john = new Person("John", 30);


The correct syntax for creating a JavaScript object is as follows:

Object Literal Syntax
javascript
Copy code
const myObject = {
  property1: value1,
  property2: value2,
  method1: function() {
    // method code
  },
  method2() {
    // method code
  }
};

// Example
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
Using the new Object() Syntax
javascript
Copy code
const myObject = new Object();
myObject.property1 = value1;
myObject.property2 = value2;

// Example
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;

//JSON document for 
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null,
  "size": 3
}

const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```
