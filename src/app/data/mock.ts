import { User } from "../model/user";

export const USER_DATA : User [] = [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date ("Dec 21, 1965"),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    image : "assets/images/users_images/bill.jpg",
    vote : 120,
    reviews : [
        {stars : 5, body : "I like Mr. Bill", author : "test@test.com"},
        {stars : 3, body : "I like Mr. Bill", author : "test@test.com"}
    ]
},{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date ("Jan 2, 1965"),
    income : 0,
    isWorking : false,
    company : "Apple",
    image : "assets/images/users_images/steve.png",
    vote : 180,
    reviews : [
        {stars : 5, body : "I like Mr. Steve", author : "test@test.com"}
    ]
},{
    firstName : "Tim B.",
    lastName : "Lee",
    dob : new Date ("Aug 1, 1965"),
    income : 40000,
    isWorking : true,
    company : "World Wide Web",
    image : "assets/images/users_images/tim.jpg",
    vote : 150,
    reviews : [
        {stars : 3, body : "I like Mr. Lee", author : "test@test.com"}
    ]
}]