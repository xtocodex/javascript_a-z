const name = "gopal"
const repoCount = 50

console.log(name + repoCount + "Value");

// follow the below syntax not above

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

__________________________________________________

const gameName = new String('gopal-gm')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   gopal  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gopal.com/gopal%20mohapatra"

console.log(url.replace('%20', '—'));
 



console.log(url.includes('sundar'))

console.log(gameName.split('—'));




// Strings read on MDN and get some practise ...

