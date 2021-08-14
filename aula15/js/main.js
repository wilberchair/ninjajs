// var name = 'Global';
(function(){
  // console.log('JS no browser!!! JS externo');
  console.log('Local main2');
  // name = 'local';
  var name = 'local';
  console.log(name);
})();

(function() {
  function myFcuntion(arg1, arg2) {
    return arguments;
  }
  console.log('ARGUMENTS', myFcuntion(1, 2))
})()