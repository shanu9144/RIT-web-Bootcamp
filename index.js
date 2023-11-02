const {doSomething, againDoSomething,create,read,update,deletefun } = require('./newModule.js');
const otherfunction = require('./newModule.js')




console.log("js test using node")
//for (let i = 1; i <= 5; i++) {
  //  console.log(i);
 // }

  doSomething();
  againDoSomething();
  
  console.log(create(1));
  console.log(create(10));

  console.log(read());

  console.log(update(0,100));

  console.log(deletefun(1));