var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.head = 0;
  instance.tail = 0;
  instance.storage = {};
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function(){
  if(this.head >= this.tail){
    return;
  }
  
  var dequeueVal = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  return dequeueVal;
  
};

queueMethods.size = function(){
  return this.tail - this.head; 
};
