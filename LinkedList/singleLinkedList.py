class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class SList:
    def __init__(self):
        self.head = None
    
    def add_to_front(self,data):
        newNode = Node(data)
        currentHead = self.head
        newNode.next = currentHead
        self.head = newNode
        return self

    def insert_at(self,val,n=0):
        if n == 0:
            return self.add_to_front(val)
        else:
            newNode = Node(val)
            current = self.head
            counter = 1 #2 #based on whether you mean first elemnt is 0 or one ?
            while current.next and counter < n:
                counter += 1
                current = current.next
                rest_of_llist = current.next
            current.next = newNode
            newNode.next = rest_of_llist
            return self

    def add_to_back(self,data):
        runner = self.head
        if not runner:
            return self.add_to_front(data)
            
        newNode = Node(data)
        while runner.next:
            runner = runner.next
        runner.next = newNode
        return self

    def remove_from_front(self):
        if not self.head:
            return self
        currentNode = self.head
        self.head = currentNode.next
        return currentNode

    def remove_val(self, val):
        # the node with given value is first node
        current = self.head
        if current.data == val:
            print('Calling the remove from front...')
            return self.remove_from_front()
        # the node in middle or latest one
        else:
            while current.next.data != val:
                current = current.next
            deletedNode = current.next
            current.next = current.next.next
        return deletedNode

    def remove_from_back(self):
        if not self.head:
            return self # no nodes case
        current = self.head
        if not current.next:
            deletedNode = self.head
            self.head = None  # Only one node case
            return deletedNode            
        while current.next.next:
            current = current.next
        deletedNode = current.next
        current.next = None
        return deletedNode

    def print_values(self):
        runner = self.head
        while runner:
            print(runner.data, end=" --> ") # end="-> " in same line ..
            runner = runner.next
        print("None")
        return self

#test
mah_ll = SList()
mah_ll.add_to_front(8)
mah_ll.remove_from_back()
mah_ll.add_to_front(15).add_to_back(2).add_to_back(7).remove_from_front()
# 2 7 
mah_ll.print_values()

print('-----------------')

#test 02
mah_ll02 = SList()
mah_ll02.add_to_front(8).add_to_front(9)
mah_ll02.add_to_back(20).add_to_back(7).add_to_front(1)
# 1 9 8 20 7 none

# test remove_val method using the three cases we have
mah_ll02.print_values().remove_val(8) # remove middle element
mah_ll02.print_values()
# 1 9 20 7 none

# adding back some values before test
print('\n--adding other elements --------')

mah_ll02.add_to_back(30).add_to_back(45).add_to_front(11)
# 11 1 9 20 7 30 45 none
mah_ll02.print_values()

print('\n--removing some elements-------')

mah_ll02.remove_val(11) # remove first element
mah_ll02.print_values()
mah_ll02.remove_val(45) # remove last element
mah_ll02.print_values()
# 1 9 20 7 30 none

print('\n---Trying insert_at method-----\n')

mah_ll02.print_values()
mah_ll02.insert_at(40,0).print_values() # case first
mah_ll02.insert_at(40,3).print_values() # case middle
mah_ll02.insert_at(40,7).print_values() # case last
mah_ll02.insert_at(80,8).print_values() # case last again
mah_ll02.insert_at(100,100).print_values() # case extreme behaviour will add to the end.
