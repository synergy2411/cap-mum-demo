"use strict";
//Destructuring : Arrays & Objects
exports.__esModule = true;
// var arr = ["Foo", "Bar", "Bam"]
// var [arr1, , arr3] = arr;
// console.log(arr3);      //
// var myModule = {
//     drawText : function(text){console.log("Drawing " + text)},
//     drawCircle : function(r){console.log(Math.PI * r * r)}
// }
// var { drawText, drawCircle} = myModule;
// drawText("Some Text");
//Template String Syntax
//- include the variable
//- multi-line string
//  var firstName = "Foo";
//  console.log(`Hello ${firstName}!!`);
//Block level scoping
// - let 
// - const
// function demo(arr){
//     if(arr.length>2){
//         let load = "LOADING...";
//         console.log(flash);     //
//     }else{
//         let flash = "FLASHING..."
//     }
// }
// demo(["Foo","Bar","Bam"]);
//Arrow function
// let arr = [3,4,5,6,7];
// let newArray = arr.map((v)=>v*2);
// // arr.map(function(v){
// //     return v*2;
// // });
// console.log(newArray)
var student_1 = require("./student");
var obj = {
    firstName: "Foo",
    lastName: "Bar",
    age: 37
};
var foo = new student_1.Student(obj);
console.log(foo.getFullName());
console.log("Magic Number : " + student_1.MAGIC_NUMBER);
//npm install -g typescript
