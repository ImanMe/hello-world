import {OtherPoint} from "./point";

function log(message){
    console.log(message);
}

var message="Hello world";

log(message);

function doSomething(){
    for(var i=0; i<6; i++){
        console.log(i);
    }

    console.log("finally: " + i);
}

function doSomethingElse(){
    for(let i=0; i<6; i++){
        console.log(i);
    }

    //i is now out of scope and gives compile time error
    //console.log("finally: " + i);
}

doSomething();
doSomethingElse();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];

let x;
x=1;
x="t";
x=true;

let y = 1;

//y is a number and string can not be assigned to it.
//y = "b";

//Enum

enum Color {Red=0, Green=1, Blue=2};

let backgroundColor = Color.Red;

console.log(backgroundColor);

//Type Asserion

let msg;

msg = "abc";

let endsWith = (<string>msg).endsWith("c");

let endsWithAlternativ = (msg as string).endsWith("c");

//Arrow Functions

let doLog = (message) => console.log(message);

console.log(doLog("Hey from arrow function"));

//Inline Annotation

let drawPoint = (point:{x:number, y:number}) => {
    //...
}

drawPoint({x:2,y:3});

//Interface

interface Point{
    x:number,
    y:number
}

let drawPointAlternative = (point:Point) => {
    //...
}

drawPoint({x:2,y:4});

//Class

let point = new OtherPoint(1,2);

point.q = 11;

console.log(point.q);

point.draw();