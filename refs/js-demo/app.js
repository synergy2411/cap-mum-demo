// // console.log("HEllo");

// var x = "20";
// var y = 20;
// var z = 10;

// console.log(x+z);       //2010
// console.log(x-z);       //?

// if(x == y){
//     console.log("EQUALS");
// }else{
//     console.log("NOT EQUALS");
// }

// function longRunningOperation (){
//     setTimeout(function(){
//         console.log("Running....");
//     }, 800);
// }
// function webRequest(req){
//     console.log("Staring with ID #"+ req.id);
//     longRunningOperation();
//     console.log("Ending with ID #"+ req.id);
// }
// webRequest({id : 1});
// webRequest({id : 2});

//Object : 
    //Literal
    // var myBooks = ["book1", "book2", "book3"];
    //     var box = {
    //         width : 6,
    //         heigth : 8,
    //         books : myBooks
    //     }
    //     box.volume = box.width * box.heigth;
    //     console.log(box.books.length);      //3
    //     box.books.push("book4");
    //     console.log(box.books.length);      //4
    //     console.log(myBooks.length);      //4

        // var person = {
        //     firstName : "Foo",
        //     lastName : "Bar",
        //     getFullName : function(){
        //         // console.log(this);          //person
        //         var self = this;
        //         // var that = this;
        //         var firstName = "New Name";
        //         function nestFunc(){
        //             // var firstName = "Some Name ";
        //             // console.log(this);          //'global' object
        //             return this.firstName + " "  + this.lastName;
        //         }
        //         // return this.firstName + " "  + this.lastName;
        //         return nestFunc();
        //     }
        // }
        // console.log(person.getFullName());

    //Constructor

    // function Person(firstName , lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.getFullName = function(){
    //         return this.firstName + " " + this.lastName;
    //     }
    // }

    // var foo = new Person("Foo", "Bar");
    // console.log(foo.getFullName());     //Foo Bar
    // var bam = new Person("Bam", "Baz");
    // console.log(bam.getFullName());        //Bam Baz

    // //Instance
    // var Shoe = {
    //     gender : "Women",
    //     size : 6
    // }
    // var magicShoe = Object.create(Shoe);
    // console.log("Size : " + magicShoe.size);
    // console.log(magicShoe);         // {}


    //Functions

    // var addition = function add(num1, num2){
    //     return num1 + num2;
    // }
    // console.log(addition(5,7));          //12

    // console.log(addition(5,7));     //12
    // console.log(add(5,7));          //12

    //IIFE
    // (function(){
    //     console.log("IIFE Called!");
    // })();

    // function mystry(){
    //     var chooseNumber = function  (){
    //         return 7;
    //     }
    //     return chooseNumber();
    //     var chooseNumber = function  (){
    //         return 12;
    //     }
    // }
    // console.log(mystry());          //

    // setTimeout(function(){}, 500);

    // function  greet(name ){
    //     console.log("Hello " + name);
    // }

    // function sayHello(name, cb){
    //     if(name === "Foo"){
    //         cb("Foo")
    //     }else{
    //         cb("No Name");
    //     }
    // }

    // sayHello("Foo", greet);

//Prototyping

    // var str = "Welcome to JavaScript";
    // var str1 = new String("New String");
    // // console.log(str.length);        //

    // String.prototype.countLetter = function(letter){
    //     var counter = 0;
    //     for(var i = 0; i< this.length ; i++){
    //         if(this.charAt(i)==letter){
    //             counter++;
    //         }
    //     }
    //     return counter;
    // }

    // console.log(str1.countLetter('e'));
    // console.log(str.countLetter('a'));

    // var Shoe = {
    //     gender : "Women",
    //     size : 6
    // }
    // var magicShoe = Object.create(Shoe);
    // // console.log(Shoe.isPrototypeOf(magicShoe));
    // // console.log(magicShoe.isPrototypeOf(Shoe));
    // // console.log(magicShoe.hasOwnProperty('size'));          //?
    // console.log(Object.prototype.isPrototypeOf(Shoe));
    // console.log(Object.prototype.isPrototypeOf(magicShoe));




    // function Person(fName, lName){

    // }
    // Person.prototype.getFullName = function(){

    // }
    // var foo = new Person("Foo","Bar");
    // console.log(foo.getFullName());



    //Closures

    // function testClosure(){
    //     var x = 4;
    //     return function(){
    //         return ++x;
    //     }
    // }
    // var nestedFunc = testClosure();
    // console.log(nestedFunc());     //5
    // console.log(nestedFunc());     //6
    // console.log(nestedFunc());     //?

    // function buildTicket(transport){
    //     var nummOfPass = 0;
    //     return function(name){
    //         return "Hello " + name +"\nYou are going via " + transport
    //                 + "\nYou Ticket ID #" + ++nummOfPass; 
    //     }
    // }
    // var ship = buildTicket("Ship");
    // console.log(ship("Foo"));
    // console.log(ship("Bar"));
    // var car = buildTicket("Car");
    // console.log(car("Bam"));        //?

    // var myGlobal = require("./global");
    // myGlobal.foo();
    // console.log("Magic Number : " + myGlobal.MAGIC_NUMBER);


    // var arr = new Array(3,4,5,6,7);
    // console.log(arr.length);    //
    // //map, forEach, some, filter, every
    // var newArray = arr.map(function(value, index, array){
    //     console.log(value, index, array);
    //     return value * 2;
    // });
    // // var arr = [];
    // console.log(newArray);

    // for(var item of newArray){
    //     console.log(item);
    // }

