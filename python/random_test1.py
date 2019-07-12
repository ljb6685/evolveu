import random as r
# Generate random float value
for i  in range(5):
    print(r.random())
print('\n')
# Generate random int value
for i in range(5):
    print(r.randint(1, 11), end=' ')
print('\n')
# Generate a random number between 0 and 100
print(r.random()*100, '\n')
# Choice a random value
myList1 = [2, 109, False, 10, 'Lorem', 482, 'Ipsum']
print(r.choice(myList1), '\n')
# Generate randomly selected element from range(start, stop, step)
for i in range(3):
    print(r.randrange(0, 101, 5))
print('\n')
# Generate results using keys in dictionary
outcomes = {'heads': 0, 'tails': 0}
sides = list(outcomes.keys())
for i in range(10000):
    outcomes[r.choice(sides)] += 1
print('Heads:', outcomes['heads'])
print('Tails:', outcomes['tails'], '\n')
# Generate list - sample(range(start, stop), quantity)
for i in range(5):
    num = r.sample(range(1, 46), 6)
    num.sort()
    print(num)
