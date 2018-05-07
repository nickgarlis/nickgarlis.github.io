var store = [{
        "title": "Swap nodes in a Doubly Linked List",
        "excerpt":"When I first learned about Doubly Linked Lists what I found really tricky about them was how to sort them and more specifically how to swap two nodes. So I decided to make a post about it. Let’s assume that our list consists of only 4 nodes. Those are enough for us to cover every possible scenario during swapping. Our swap function is going to take two parameters, our left and right nodes. void swap(struct list* left, struct list* right) Before we start messing with left and right’s pointers we have to make sure that the Nodes pointing to them are updated. First we make sure that there is a Node that has left as next if ( left-&gt;previous ) then we make that Node to have right as next left-&gt;previous-&gt;next = right;. If however, there are no nodes before left that means that it is the head. In that case, we now have to set our head equal to right head = right; since left is going to no longer be the head after the swap.   if ( left-&gt;previous ){    left-&gt;previous-&gt;next = right;  }  else {    head = right;  }We follow a similar procedure for the Node after right.   if ( right-&gt;next ){    right-&gt;next-&gt;previous = left;  }Now it’s just left and right. We now simply need to swap left and right’s pointers.   left-&gt;next  = right-&gt;next;  right-&gt;previous = left-&gt;previous;  right-&gt;next = left;  left-&gt;previous = right;Notice how I assigned left to be right’s next Node and right to be left’s previous Node. ","categories": ["Data stuctures"],
        "tags": ["C","Nodes"],
        "url": "http://vparticles.com/data%20stuctures/doubly-linked-lists/",
        "teaser":null}]
