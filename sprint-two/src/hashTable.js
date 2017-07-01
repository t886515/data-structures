

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.expandSize()) {
    this.reHash();
    index = getIndexBelowMaxForKey(k, this._limit);
  }
  
  var bucket = this._storage.get(index) || [];
  this._storage.set(index, bucket);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  //check right after one ite,m is removed - do we required to reduce size?
  if (this.reduceSize()) {
    this.reHash();
  }
};  
  
HashTable.prototype.checkUsage = function() {
  var counter = 0;
  this._storage.each(function(item) { 
    if (item !== undefined) {
      for (var i = 0; i < item.length; i ++) {
        counter++;
      }
    }
  });
//if > 75% (limited * .75) expand, if < 25%
// return true/false that help it to determine if its time to expand or not
//shoudl be invoked in insert 

  return counter;
};

HashTable.prototype.expandSize = function() {
  if (this.checkUsage() + 1 >= this._limit * .75) {
    return true;
  } else {
    return false;
  }
};

HashTable.prototype.reduceSize = function() {
  if (this.checkUsage() < this._limit * .25) {
    return true;
  } else {
    return false;
  }    
};

HashTable.prototype.reHash = function() {
  //should create a new limitedarray that takes in all values from old storage
  //^ once its done
  //if expandsize is true, then we times the array limit by 2
  if (this.expandSize()) {
    this._limit *= 2;
  } else if (this.reduceSize()) {
    this._limit /= 2;
  }
  
  //if reducesize is true, then we divide by 2
  
  //create a new limitedarray with the new array limit pass in
  var newLimited = LimitedArray(this._limit);
  var useThisForScopeLimit = this._limit;
  this._storage.each(function(item) {
    if (item !== undefined) {
      for (var i = 0; i < item.length; i++) {
        var newIndex = getIndexBelowMaxForKey(item[i][0], useThisForScopeLimit);
        var bucket = newLimited.get(newIndex) || [];
        newLimited.set(newIndex, bucket);
        bucket.push([item[i][0], item[i][1]]);
      }
    }
  });
  
  this._storage = newLimited;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


