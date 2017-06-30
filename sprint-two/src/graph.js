

// Instantiate a new graph
var Graph = function() {
  this.length = 0;
  this.edgeArray = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[this.length] = node;
  this.length++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === node) {
      delete this[i];
    }
  }
  for (var i =0; i < this.edgeArray.length; i++) {
    if (this.edgeArray[i][0] === node || this.edgeArray[i][1] === node) {
      this.edgeArray.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var firstExist = false;
  var secondExist = false;
  for (var i = 0; i < this.edgeArray.length; i++) {
    // debugger;
    for (var j = 0; j < this.edgeArray[i].length; j++) {
      if (this.edgeArray[i][j] === fromNode) {
        firstExist = true;
      }
      if (this.edgeArray[i][j] === toNode) {
        secondExist = true;
      }
    }
  }
    
  if (firstExist && secondExist) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  var firstExist = false;
  var secondExist = false;
  var edgeNested = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] === fromNode) {
      firstExist = true;
    }
    if (this[i] === toNode) {
      secondExist = true;
    }
  }
  if (firstExist && secondExist) {
    edgeNested.push(fromNode, toNode);
  }
  this.edgeArray.push(edgeNested);
  //console.log(edgeNested);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeArray.length; i++) {
    if ((this.edgeArray[i][0] === fromNode || this.edgeArray[i][0] === toNode) && (this.edgeArray[i][1] === fromNode || this.edgeArray[i][1] === toNode)) {
      this.edgeArray.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


