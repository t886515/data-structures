var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // for (var i = 0; i < this._storage.length; i++) {
  //   if (this._storage[i] === item) {
  //     return;
  //   }  
  // }
  //refactored during the last test!
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if(this._storage.indexOf(item) === -1){
    return false;
  } 
  
  return true;
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
