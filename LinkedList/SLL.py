class Node:
    """Class representing single node in linked list."""
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList:
    """Class representing the single linked list"""
    def __init__(self):
        self.head = None
    
    def insertAtBeginning(self,data):
        newNode = Node(data)
        newNode.next = self.head
        self.head = newNode

    def insertAtEnd(self,data):
        newNode = Node(data)
        if not self.head:
            self.head = newNode
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = newNode
    
    def display(self):
        """Print the linked list iteams"""
        current = self.head
        while current:
            print(current.data, end="-->") # end="-> " in same line ..
            current = current.next
        print("None")

#test
mah_ll = LinkedList()
mah_ll.insertAtBeginning(8)
mah_ll.insertAtBeginning(15)
mah_ll.insertAtEnd(2)
mah_ll.display()
