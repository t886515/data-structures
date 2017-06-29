var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      function recursion(obj, nextVal) {
        if (nextVal === null) {
          obj.next = newNode;
        } else if (nextVal) {
          recursion(nextVal, nextVal.next);
        }
      }
      recursion(list.head, list.head.next);
    }
    //don't need a recursion right here - use tail instead - think about it!
    list.tail = newNode;
    //1) create a node
    //2) check if head === null - refer the list.head to the new node just created
    //3) refer the list.tail to the new node
    //4) if there's a previous node - link the previous's node's next to the current node
  };

  list.removeHead = function() {
    var preVal = list.head.value;
    list.head = list.head.next;
    return preVal;
  };

  list.contains = function(target) {
    function recursingAgain(obj) {
      if (obj.value === target) {
        return true;
      } else if (obj.next === null) {
        return false;
      } else {
        return recursingAgain(obj.next);
      }
    }
    return recursingAgain(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
