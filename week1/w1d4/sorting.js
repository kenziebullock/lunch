// var myarray=[1, 10, 2, 5, 9];
// myarray.sort(function(a, b){ 
//     return a - b
// })
// console.log(myarray);

var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

students.sort(function(a, b) {
    var result = -1;
    if (a.name === b.name) {
        result = a.age - b.age;
    } 
    else if (a.name > b.name) {
        result = 1;
    } 

    return result;

});

students.sort(function(a,b) {
    if (a.name === b.name) return a.name - b.name;
    return (a.name > b.name) ? 1 : -1;
})
console.log(students);