class Node:
    def __init__(self,data):
        self.data = data
        self.previous = None
        self.next = None
    
class DouplyLinkedList:
    def __init__(self):
        self.head = None
    
    def append_to_back(self,data):
        newNode = Node(data)
        temp = self.head
        if temp is None:
            temp = newNode
            self.head = temp
            return self
        while temp.next:
            temp = temp.next
        temp.next = newNode
        newNode.previous = temp
        return self

    def traverse_forward(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")
        return self

    def traverse_backward(self):
        temp = self.head
        if not temp:
            print("List is empty!")
            return self
        while temp.next:
            temp = temp.next

        while temp:
            print(temp.data, end=" -> ")
            temp = temp.previous
        print("None")
        return self

# test 
dll = DouplyLinkedList()
dll.append_to_back(10)
dll.append_to_back(20)
dll.append_to_back(30)
dll.traverse_forward()
dll.traverse_backward()