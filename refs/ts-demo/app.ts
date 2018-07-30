// //Destructuring : Arrays & Objects

// // var arr = ["Foo", "Bar", "Bam"]
// // var [arr1, , arr3] = arr;
// // console.log(arr3);      //

// // var myModule = {
// //     drawText : function(text){console.log("Drawing " + text)},
// //     drawCircle : function(r){console.log(Math.PI * r * r)}
// // }

// // var { drawText, drawCircle} = myModule;

// // drawText("Some Text");

// //Template String Syntax
//  //- include the variable
//  //- multi-line string

// //  var firstName = "Foo";
// //  console.log(`Hello ${firstName}!!`);

// //Block level scoping
//     // - let 
//     // - const

//     // function demo(arr){
//     //     if(arr.length>2){
//     //         let load = "LOADING...";
//     //         console.log(flash);     //
//     //     }else{
//     //         let flash = "FLASHING..."
//     //     }
//     // }
//     // demo(["Foo","Bar","Bam"]);

// //Arrow function

// // let arr = [3,4,5,6,7];
// // let newArray = arr.map((v)=>v*2);
// // // arr.map(function(v){
// // //     return v*2;
// // // });
// // console.log(newArray)

// import { Student, MAGIC_NUMBER } from './student';
// import { Person } from './person';

// let obj : Person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 37
// }

// let foo = new Student(obj);
// // console.log(foo.getFullName());
// // console.log("Magic Number : " + MAGIC_NUMBER);

// //npm install -g typescript


// class Foo{}
// class Bar{}
// class Bam {
//     private foo2 = new Foo();
//     constructor(private foo : Foo, bar : Bar){
//         let foo1 = new Foo();
//         // this.
//     }
//     demo(){
//         // this.
//     }
// }

// new Bam(new Foo(), new Bar());

// //Decorators : 

//Spread & Rest (...)
function demo(fName , ...args){
    console.log(args[0]);           //?
}
demo("Foo","Bar",32);


let arr = [3,4,5];
let newArr = [1,2,...arr, 6,7];
console.log(newArr);        //?

//npm install -g @angular/cli@1.7