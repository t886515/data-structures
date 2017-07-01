

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var counter = 1;
  this._storage.each(function(item) { 
    if (item !== undefined) {
        //return console.log(item, 'hi?')
      for (var i = 0; i < item.length; i ++) {
        counter++;
      }
    }
  });
  // console.log(counter, 'here check counter');
  if (counter >= (this._limit * .75)) {
    this.reHash();
  } else {
    var bucket = this._storage.get(index) || [];
    this._storage.set(index, bucket);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      }
    }
    bucket.push([k, v]);
  //this.checkUsage();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
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
  
 //  HashTable.prototype.checkUsage = function() {
 //  //if > 75% (limited * .75) expand, if < 25%
 // // return true/false that help it to determine if its time to expand or not
 // //shoudl be invoked in insert 
 //  };

  HashTable.prototype.reHash = function() {
    //should create a new limitedarray that takes in all values from old storage
    //^ once its done
  };

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


