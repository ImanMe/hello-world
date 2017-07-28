"use strict";
exports.__esModule = true;
var point_1 = require("./point");
function log(message) {
    console.log(message);
}
var message = "Hello world";
log(message);
function doSomething() {
    for (var i = 0; i < 6; i++) {
        console.log(i);
    }
    console.log("finally: " + i);
}
function doSomethingElse() {
    for (var i = 0; i < 6; i++) {
        console.log(i);
    }
    console.log("finally: " + i);
}
doSomething();
doSomethingElse();
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var x;
x = 1;
x = "t";
x = true;
var y = 1;
y = "b";
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
console.log(backgroundColor);
//Type Asserion
var msg;
msg = "abc";
var endsWith = msg.endsWith("c");
var endsWithAlternativ = msg.endsWith("c");
//Arrow Functions
var doLog = function (message) { return console.log(message); };
console.log(doLog("Hey from arrow function"));
//Inline Annotation
var drawPoint = function (point) {
    //...
};
drawPoint({ x: 2, y: 3 });
var drawPointAlternative = function (point) {
    //...
};
drawPoint({ x: 2, y: 4 });
//Class
var point = new point_1.OtherPoint(1, 2);
point.q = 11;
console.log(point.q);
point.draw();
