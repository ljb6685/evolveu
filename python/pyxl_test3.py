#  Add data to the Excel sheet - Appending group of values at the bottom of the current sheet
from openpyxl import Workbook
wb = Workbook()
filepath='./demo.xlsx'
sheet = wb.active

data = [('ID', 'Name', 'Value'), (1, 'AAA', 50), (2, 'BBB', 150)]
for row in data:
    sheet.append(row)

wb.save(filepath)
