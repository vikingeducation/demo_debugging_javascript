// Call Stack


var zero,
    one,
    two,
    three;

console.log(zero, one, two, three);

zero = function() {
  var a = 'Cool!';
  var b = 'Gnarly!';
  console.log('zero');
  throw new Error("Uh oh...");
};

one = function() {
  zero.call({});
  console.log('one');
};

two = function() {
  one();
  console.log('two');
};

three = function() {
  two();
  console.log('three');
};


var onLoad = function() {
  three();
};


window.addEventListener('load', onLoad);

