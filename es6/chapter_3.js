// Numbers
let count = 10;                         // integer literal; count is still a double
const blue = 0x0000ff;                  // hexadecimal (hes ff = decimanl 255)
const umask = 0o0022;                   // octal (octal 22 = decimal 18)
const roomTemp = 21.5;                  // decimal
const c = 3.0e6;                        // exponential (3.0 x 10^6= 3.000.000)
const e = -1.6e-19;                     // exponential (-1.6 x 10^-19 = 0.00000000000000000016)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;                        // "not a number"

const small = Number.EPSILON;           // the smallest value that can be
                                        // added to 1 to get a distinct number
                                        // larger than 1, approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // the largest representable integer
const max = Number.MAX_VALUE;           // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER; // the smallest representable integer
const min = Number.MIN_VALUE;           // the smallest representable number
const nInf = Number.NEGATIVE_INFINITY;  // the same as -Infinity
const Nnan = Number.NaN;                // the same as NaN
const Ninf = Number.POSITIVE_INFINITY;  // the same as -Infinity

// Booleas
let heating = true;
let cooling = false;

// Symbols
const RED = Symbol();
const ORANGE = Symbol("The color of a sunset");
RED === ORANGE // false: every symbol is unique

// Null and undefined
let currentTemp;            // implicit value of undefined
const targetTEmp = null;    // target temp null -- "not yet known"
currentTemp = 19.5;         // currentTemp now has value
currentTemp = undefined;    // currentTemp appears as if it had never 
                            // been initialized; not recommended

// Objects
const obj = {};
obj.color = "yellow";

obj["not an identifier"] = 3;
obj["not an identifier"];       // 3
obj["color"];                   // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];                      // 8

const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = {name: 'Sam', age: 4}; //  declaration on one line

const sam3 = {
    name: 'Sam' ,
    classification: {               // property values can
        kingdom: 'Anamalia',        // be objects themselves
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

sam3.classification.family;         // "Felidae"
sam3["classification"].family;      // "Felidae"
sam3.classification["family"];      // "Felidae"
sam3["classification"]["family"];   // "Felidae"

sam3.speak = function() {return "Meow!"; };
sam3.speak();                               // "Meow!"

delete sam3.classification;         // the whole classification tree is removed
delete sam3.speak;                  // the speak function is removed

// Arrays
const a1 = [1, 2, 3, 4];                    // array containing numbers
const a2 = [1, 'two', 3, null];             // array containing mixed types
const a3 = [                                // array on multiple lines
    "What the hammer? What the chain",
    "In what furnace wa thy brain",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp",
];
const a4 = [                                // array containing objects
    { name: "Ruby", hardness: 9},
    { name: "Diamond", hardness: 10},
    { name: "Topaz", hardness: 8},
];
const a5 = [                                // array containing arrays
    [1, 3, 5],
    [2, 4, 6],
];

const arr = ['a', 'b', 'c'];
arr.length;                                 // 3
// get the first element:
console.log(arr[0]);                                     // 'a'
// the index of the last element in arr is arr.length-1:
arr[arr.length - 1];

const arr2 = [1, 2, 'c', 4, 5];
arr2[2] = 3;        // arr2 is now [1, 2, 3, 4, 5]

// Dates
const now = new Date();
console.log(now);

const halloween = new Date(2022, 9, 31); // note that months are
                                         // zero-based: 9=October
const halloweenParty = new Date(2022, 9, 31, 19, 0); // 19:00 = 7:00 pm

console.log(halloweenParty.getFullYear());      // 2022
console.log(halloweenParty.getMonth());         // 9
console.log(halloweenParty.getDate());          // 31
console.log(halloweenParty.getDay());           // 1 (Mon; 0=Sun, 1=Mon, ...)
console.log(halloweenParty.getHours());         // 19
console.log(halloweenParty.getMinutes());       // 0
console.log(halloweenParty.getSeconds());       // 0
console.log(halloweenParty.getMilliseconds());  // 0

// Data Type Conversion
// Converting to Numbers:
const numStr = "33.3";
const num = Number(numStr); // this creates a number values, *not*
                            // an instance of the Number object

const a = parseInt("16 volts", 10);     // the "volts" is ignored, 16 is
                                        // parsed in base 10  
const b = parseInt("3a", 16);           // parse hexadecimal 3a; result is 58
const c = parseFloat("15.5 kph")        // the " kph" is ignored; parseFloat
                                        // always assumes base 10
const d = new Date();                   // current date
const ts = d.valueOf();                 // numeric value: milliseconds since
                                        // midnight, January 1, 1970 UTC
const B = true;
const n = B ? 1 : 0;

// Converting to String
const g = 33.5;             // 33.5 -  a number
const s = g.toString();     // "33.5" - a string

const arr3 = [1, true, "hello"];
arr3.toString();                // "1, true, hello"

// Converting to Boolean
const m = 0;            // "falsy" value
const m1 = !!m;         // false
const m2 = Boolean(m);  // false
