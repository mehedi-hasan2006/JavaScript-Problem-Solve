/**
 * Syntax
 let objectName = {
    key : value,
 }
 */


 let students = {
    name : "Mehedi Hasan",
    roll : 811914,
    dept : "CST / CSE",
    collegName: "KPI",
 }

 for(let student in students){

    let key = student;
    let value = students[student]
    console.log(key , " =", value);
 }


 let marks = {
    bangla : 85,
    english : 60,
    physics : 70,
 }

 let total = marks.bangla + marks.english + marks.physics;
 console.log(total)

 let sum = 0;
 for(let mark in marks){
    sum = sum + marks[mark];
 }

 console.log("total is " , sum)
