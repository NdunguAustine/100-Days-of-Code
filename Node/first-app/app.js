//creating a function
function sayHello(name){
    console.log('Hello '+ name);
}
sayHello('austine');

//Global objects in javascript, they belong to the window object
setTimeout()
clearTimeout();

setInterval()
clearInterval();

window.setTimeout //or setTimeout()
//window object is not in node, In node, we have global
global.setInterval();

//Global objects in js are not included in the global object in node