var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[value] = value;
    size++;
  };

  someInstance.pop = function() {
  
    if (size <= 0) {
      return size;
    }
    var keyArray = Object.keys(storage);
    var popVal = keyArray[keyArray.length-1];
    delete storage[popVal];
    size--;
    return popVal;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
