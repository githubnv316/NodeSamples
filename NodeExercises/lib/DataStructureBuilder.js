module.exports = {

	buildLinkedList: function (inputArray) {

			// create sentinel
		var linkedListStart = this.createNewLinkedListNode(null, null, null);
		var previousNode = linkedListStart;

		for( var i=0; i < inputArray.length; i++) {

			var temp = previousNode;
			temp.Value = inputArray[i];

			// tags the previous and next
			var newNode = this.createNewLinkedListNode(null, temp, null);
      		temp.Next = newNode;

			previousNode = newNode;
		}

		console.log(linkedListStart);
    	return linkedListStart;
	},
	createNewLinkedListNode: function  (nextNode, previousNode, value ) {

		return linkedListNode = {
			Next: nextNode,
			Previous: previousNode,
			Value: value
		};
	}
};