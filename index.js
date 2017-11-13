// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
 newDrivers=drivers.push(name);
}
function destructivelyPrependDriver(name){
  newDrivers2=drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  newDriver3=drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  newDriver4=drivers.shift();
}
function appendDriver(name){
let driversN=[...drivers,name];
return driversN;
}
function prependDriver(name){
  let driversFirst=[name, ...drivers];
  return driversFirst;
}
functionRemoveLastDriver(){

}
