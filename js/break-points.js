// Break Points


var BreakPoints = function() {

  var a = 1,
      b = 2,
      c,
      d;

  console.log(this);
  console.log('Set a break point here.');
  console.log('You should see values for a and b, but not for c and d');
  console.log('You will also see `this` is the window object');

  function doCoolThing() {
    a = 'Cool';
    b = 'Awesome';
    console.log(this);
    c = 'Gnarly';
    d = 'Tubular';

    console.log('Set a break point here');
    console.log('Now a, b, c, and d all have string values');
    console.log('Also `this` should now be set to `myObject`');
  };

  var myObject = { foo: 'bar' };

  doCoolThing.call(myObject);

};


BreakPoints();
