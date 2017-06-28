var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    size1: 0,
    storage: {}
  };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.size1] = value;
  this.size1 = this.size1 +1;
};

stackMethods.pop = function(){
  if (this.size1 <= 0) {
    return this.size1;
  }
  //var index = this.size1 - 1;
  //var index = this.size1-1
  var keyArray = Object.keys(this.storage);
  var index = keyArray[keyArray.length-1];
  var popVal = this.storage[index];
  delete this.storage[index];
  this.size1 = this.size1 -1;
  return popVal;
};

stackMethods.size = function() {
  return this.size1;
};
