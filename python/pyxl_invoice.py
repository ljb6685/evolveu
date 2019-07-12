import random as r
from openpyxl import Workbook
from datetime import datetime, timedelta
import pandas as pd

wb = Workbook()
sheet = wb.active

header = ['Date', 'Customer', 'Invoice', 'Item', 'Price']
customerList = ['John', 'Greg', 'David', 'Mike', 'Peter', 'Sam', 'Will', 'Tom', 'justin', 'Jane']
itemList = ['apple', 'orange', 'mango', 'strawberry', 'melon', 'tomato', 'pear', 'avocado', 'blueberry', 'peach']

start = datetime.strptime("01-03-2019", "%d-%m-%Y")
end = datetime.strptime("28-03-2019", "%d-%m-%Y")
date_list = [(start + timedelta(days=x)).strftime("%d-%m-%Y")
 for x in range(0, (end-start).days)]

day_amt = 0
sheet.append(header)
print('\n---Invoiced amount each day---\n')
for j in range((end-start).days):
    for i in range(r.sample(range(3, 4), 1)[0]):
        date_val = (date_list[j])
        customer_val = (r.choice(customerList))
        invoice_val = str('19-{}-{}'.format(j,i))
        for k in range(r.sample(range(1, 5), 1)[0]):
            item_val = (r.choice(itemList))
            price_val = r.sample(range(60, 100), 1)[0]
            sheet.append([date_val, customer_val, invoice_val, item_val, price_val])
            day_amt = day_amt + price_val
    print((date_list[j]), '--> $', day_amt) # invoiced amount each day
    day_amt = 0

wb.save('invoice.xlsx')
df = pd.read_excel('invoice.xlsx')
# total invoiced amount to each client
print('\n---Total invoiced amount to each client---\n')
for i in range(len(customerList)):
    result_amount = df[df['Customer'].isin(customerList[i:i+1])]
    print(customerList[i:i+1], '--> $', sum(result_amount.Price))
# invoices by client
print('\n---Invoices by client---\n')
for j in range(len(customerList)):
    result_invoice = df[df['Customer'].isin(customerList[j:j+1])]
    print(customerList[j:j+1], '-->', len(result_invoice.Invoice), 'invoices')
