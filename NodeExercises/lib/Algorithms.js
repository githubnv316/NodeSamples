var datastructureBuilder = require('./DatStructureBuilder')

module.exports = {
	reverseLinkedList: function (inputLinkedList) {

		var currentNode = inputLinkedList;
		var reversedList = null;
		
		while(currentNode !== null) {
      
	      var newListItem = datastructureBuilder.createNewLinkedListNode(currentNode.Previous, currentNode.Next, currentNode.Value);
			
	      currentNode = currentNode.Next;
      
	      if(reversedList === null) {
	          reversedList = newListItem;
	      } 
	      else { 
	       	reversedList.Next = newListItem; 
	       } 
      }

		console.log(reversedList);

		return reversedList;
	}
}