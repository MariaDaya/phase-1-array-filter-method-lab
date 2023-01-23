// Code your solution here
const drivers= ["Alex", "John", "bobby", "Omar", "Bobby", "Alan"];

function findMatching (drivers, name){
    return drivers.filter (driver => driver.toLowerCase() === name.toLowerCase())
};

function fuzzyMatch (drivers, query){
  
 return drivers.filter(el => el.startsWith(query))
    
};

function matchName (drivers, string){
    return drivers.filter (driver => driver.name === string)

}