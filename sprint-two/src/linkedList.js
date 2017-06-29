var LinkedList = function() { //O(log n)
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //O(1)

    //don't need a recursion right here - use tail instead - think about it!
    //1) create a node
    var node = Node(value);
    //2) check if head === null - refer the list.head to the new node just created
    if(list.head === null){
      list.head = node; 
    } else {
      //3) refer the list.tail to the new node
      list.tail.next = node; 
    }
    //4) if there's a previous node - link the previous's node's next to the current node
    list.tail = node;
  };

  list.removeHead = function() { //O(1)
    var prevHead = list.head;
    list.head = list.head.next; 
    return prevHead.value; 
  };

  list.contains = function(target) { //O(log n)
   //check if target = node.value 
   var recursion = function(nodeObj){
    if (nodeObj.value === target){
      return true; 
    } else if (nodeObj === list.tail){
      return false; 
    }
    
    return recursion(nodeObj.next);
    
   };
   
   return recursion(list.head);
   
  };

  return list;
};

var Node = function(value) { //O(1)
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
