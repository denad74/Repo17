// Lodash
const  _ = require('lodash');

// only change code below this line
// users nested array with four objects starts here
var users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];
// users nested array with four objects ends here

// getUsers funcion - list of users starts here
function getUsers() {
    var output = "";
    for(var i = 0; i < users.length; i++){
        output  = `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`;
        console.log(output);  
        
    }  
    return output;
}
// getUsers function - list of users ends here

// findUsers(lastName, gender) function starts here

function findUser(lastName, gender) {
    
    try{
        // add appropriete code here
        var user = _ .find(users, {'lastName': lastName, 'gender': gender});
        var iFindUser = console.log(`${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`); 
        
        
    } catch(error) {
        
        console.log( "Cannot read property 'firstName' or undefined", error);     
        return error;
    }
    return iFindUser;
}
// findUser(lastName, gender) function ends here
// Only change code above this line

getUsers();
findUser("Doe", "male");

module.exports = findUser;