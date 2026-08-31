//Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //name IIFE
    console.log(`DB CONNECTED`);
})();

//(Defination)(Excution)

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('trupti')
