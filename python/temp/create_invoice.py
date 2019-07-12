import xlrd
import collections
import functools
import operator
import pandas as pd
import numpy as np


file_data = pd.read_excel('invoice.xlsx')


name_ = file_data[['Client Name', '$ Amount']]
date_ = file_data[['Date', '$ Amount']]
byName = name_.groupby('Client Name')
byDate = date_.groupby('Date')

print("NAME")

print("SUM")
print(byName.sum())
print("COUNT")
print(byName.count())

print("DATE")

print("SUM")
print(byDate.sum())
print("COUNT")
print(byDate.count())


# wb = xlrd.open_workbook('invoice.xlsx')
# sheet = wb.sheet_by_index(0)
# sheet.cell_value(0, 0)

# # Extracting number of rows
# print("# rows", sheet.nrows)

# for i in range(sheet.ncols):
#     print(sheet.cell_value(0, i))
