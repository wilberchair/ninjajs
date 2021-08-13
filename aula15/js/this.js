(function() {
  var myObject = {
    myProperty: 1,
    init: function init() {
      return this.myProperty;
    }
  }
  console.log(myObject.init())

  function myFunction() {
    return this;
  }

  console.log(myFunction());
  console.log('myFunction', myFunction() === window);

  var myObject2 = {
    myProperty2: 1,
    init2: function init2() {
      return this;
    }
  }
  console.log('myObject', myObject2.init2());
  console.log('myObject', myObject2.init2() === myObject2);

  var newObject = new Object();
  console.log('newObject', newObject);

  function MyConstructor() {
    this.prop1 = 'prop1';
    this.prop2 = 'prop2';
  }

  var constructor = new MyConstructor()
  console.log('MyConstructor', constructor)
  console.log('MyConstructor', MyConstructor())
})()