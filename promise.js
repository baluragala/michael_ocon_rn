// let p2 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     reject({ message: "done" });
//   }, 3000);
// });

// p2.then(function(data) {
//   console.log("data", data);
// }).catch(function(err) {
//   console.log("err", err);
// });

function t1() {
  console.log(1);
}

function t2() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(2);
      resolve();
    }, 3000);
  });
}

function t3() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(3);
      resolve();
    }, 3000);
  });
}

function t4() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(4);
      resolve();
    }, 3000);
  });
}

function t5() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(5);
      resolve();
    }, 3000);
  });
}

// function doWork() {
//   t1();
//   t2()
//     .then(function(d) {
//       return t3();
//     })
//     .then(function() {
//       return t4();
//     })
//     .then(function() {
//       return t5();
//     });
// }

function doWork() {
  t1();
  t2()
    .then(d => t3())
    .then(d => t4())
    .then(d => t5());
}

doWork();
