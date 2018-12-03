function t1() {
  console.log(1);
}

function t2(callback) {
  setTimeout(function() {
    console.log(2);
    callback();
  }, 3000);
}

function t3() {
  console.log(3);
}

function doWork() {
  t1();
  t2(t3);
}

doWork();
