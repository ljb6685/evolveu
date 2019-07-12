# Remove sheet from existing xlsx
from openpyxl import load_workbook
filepath = './demo.xlsx'
wb = load_workbook(filepath)

wb.remove(wb['Sheet2'])
wb.save(filepath)