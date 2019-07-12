# Copy data from one sheet to another sheet
from openpyxl import load_workbook
filepath = './demo.xlsx'
wb = load_workbook(filepath)

source = wb['Sheet']
target = wb.copy_worksheet(source)
wb.save(filepath)