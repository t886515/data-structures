var Tree = function(value) { //O(n^2)
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  //an array containing a number of subtrees
  
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

//takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) { //O(1)
  var childObj = Tree(value);
  this.children.push(childObj);
};

//takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) { //0(n^2)
  var counter = 0;
  function recursion(treeObj, target) {
    if (treeObj.value === target) {
      counter++;
    } 
    for (var i = 0; i < treeObj.children.length; i++) {
      recursion(treeObj.children[i], target);
    }
  }
  recursion(this, target);
  return counter > 0 ? true : false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
