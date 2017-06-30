var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  
  tree.insert = function(value) {
      
    var addressNode = BinarySearchTree(value);
      
    function recursion(newNode, currentNode) {
      if (newNode.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          recursion(newNode, currentNode.right);
        }
      } else if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
           currentNode.left = newNode;
      } else {
        recursion(newNode, currentNode.left);
        }
      }
    }
    recursion(addressNode, this);

  };

  
  tree.contains = function(target) {
    function recursingAgain(nodeObj, target) {
      if (nodeObj.value === target) {
        return true;
      }
      if (target > nodeObj.value) {
        if (nodeObj.right === null) {
          return false;
        }
        return recursingAgain(nodeObj.right, target);
      } else {
        if (nodeObj.left === null) {
          return false;
        }
        return recursingAgain(nodeObj.left, target);
      }
    }
    return recursingAgain(this, target);
    
  }
  
  tree.depthFirstLog = function(callback) {
    var arrayOfValues = [];
    function whyRecursing(currentNode) {
      arrayOfValues.push(currentNode.value);
      if (currentNode.left !== null) {
        whyRecursing(currentNode.left);
      }
      if (currentNode.right !== null) {
        whyRecursing(currentNode.right);
      }    
    }
    whyRecursing(this);    
    
    _.each(arrayOfValues, callback);
    
    // for (var i = 0; i < arrayOfValues.length; i++) {
    //   callback(arrayOfValues[i]);
    // };
    
    
  };
  
  return tree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
