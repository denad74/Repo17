// Lodash
const  _ = require('lodash');

// only change code below this line
// users nested array with four objects starts here
var users = [
  
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        id: 3,
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        id: 4,
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
        output  = `${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`;
        console.log(output);  
        
    }  
    return output;
}
// getUsers function - list of users ends here

// findUsers(id) function starts here

function findUserById(id) {
    
    try{
        // add appropriete code here
        var user = _ .find(users, {'id': id});
        var iFindUser = console.log(`${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`); 
        console.log(iFindUser);
        return iFindUser;
    } catch(error) {
        
        console.log( "Cannot read property 'id'",error);     
        return error;
    }
    
}
// findUser(lastName, gender) function ends here
// Only change code above this line

getUsers();
findUserById(1);
 

findUserById(5); 

module.exports = findUserById;