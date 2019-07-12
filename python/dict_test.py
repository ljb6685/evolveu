import random as r
import pandas as pd
from openpyxl import Workbook
from datetime import datetime, timedelta

header = ['Date', 'Customer', 'Invoice', 'Item', 'Price']
customerList = ['John', 'Greg', 'David', 'Mike', 'Peter', 'Sam', 'Will', 'Tom', 'justin', 'Jane']
itemList = ['apple', 'orange', 'mango', 'strawberry', 'melon', 'tomato', 'pear', 'avocado', 'blueberry', 'peach']
dic={}

start = datetime.strptime("01-03-2019", "%d-%m-%Y")
end = datetime.strptime("28-03-2019", "%d-%m-%Y")
date_list = [(start + timedelta(days=x)).strftime("%d-%m-%Y")
 for x in range(0, (end-start).days)]

for j in range((end-start).days): # Created 10 dictionaries
    num = r.sample(range(10, 50), 5)
    for i in range(5): # Created 6 values for each dictionary
        dic[header[0]] = (date_list[j])
        dic[header[1]] = (r.choice(customerList))
        dic[header[2]] = str('19-{}'.format(j))
        dic[header[3]] = (r.choice(itemList))
        dic[header[4]] = num[i]

    print(dic)
