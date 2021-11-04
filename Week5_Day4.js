//Реализуйте простую версию Promise.all.
//Эта функция должна принимать массив обещаний и возвращать массив разрешенных значений.
//Если какое-либо из обещаний отклонено, функция должна их уловить.

const promise1 = new Promise((resolve, reject) => {
    resolve(3);
    });
  
  const promise2 = new Promise((resolve, reject) => {
    resolve(42);
    });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('foo');
    }, 100);
   }); 

  Promise.all([promise1, promise2, promise3]).then((res) => {
    console.log([res[0], res[1], res[2]]);   // expected output: Array [3, 42, "foo"]
    //console.log(res[1]);      
    //console.log(res[2]);
  }, (err) => {
  alert(err);
  });