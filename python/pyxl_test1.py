# Create Excel sheet
from openpyxl import Workbook
wb = Workbook()
filepath="./demo.xlsx"
wb.save(filepath)