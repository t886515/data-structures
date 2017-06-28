var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.size1 = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size1] = value;
  this.size1++;
};

stackMethods.pop = function() {
  if (this.size1 <= 0) {
    return;
  }
  this.size1--;
  var popVal = this.storage[this.size1];
  delete this.storage[this.size1];
  return popVal;
};

stackMethods.size = function() {
  return this.size1;
};

