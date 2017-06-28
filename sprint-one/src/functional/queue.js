var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size <= 0){
      return size;
    }
    
    var keyArray = Object.keys(storage);
    var dequeueVal = keyArray[0];
    delete storage[dequeueVal];
    size--;
    return dequeueVal;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
