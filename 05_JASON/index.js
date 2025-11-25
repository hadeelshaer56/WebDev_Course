
let userObj = {
    username: "Hadeel",
    grade: 90,
    password: "12345",
    isConnected: true,
    address:{
        country: "isreal",
        city: "majdal shams",
        street: "7th circle"
    },
    allGrades:[{cSharp:98},{cpp:90},100,95]
};

let newGrade = userObj.grade + 10;
userObj.grade += 10;
userObj.id = 1000;
let userObj2 = userObj;
userObj2.grade = 0;

let grade1 = userObj.grade;

userObj.address.street = "8th circle";
userObj["address"]["country"] = "USA";
userObj["address"].city = "NY";

let arr = [userObj,{
    username: "Hadeel",
    grade: 90,
    password: "12345",
    isConnected: true,
    address:{
        country: "isreal",
        city: "majdal shams",
        street: "7th circle"
    },
    allGrades:[{cSharp:98},{cpp:90},100,95]}
 ]

 arr[0].allGrades[1] = {CPP: 95};
 arr[1].avg = 95;
let user2 = arr[1];
user2.password = "abcd";
