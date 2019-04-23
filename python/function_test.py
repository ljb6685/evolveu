# email function
def email(fname, lname):
    result = '{0}.{1}@evolveu.ca'.format(fname, lname)
    return result
# taxCal function
def taxCal(myIncome):
    myIncome = int(myIncome)
    tempTax_1 = (myIncome - 47630) * 0.205
    tempTax_2 = (myIncome - 95259) * 0.26
    tempTax_3 = (myIncome - 147667) * 0.29
    tempTax_4 = (myIncome - 210371) * 0.33
    addTax_1 = (47630 * 0.15)
    addTax_2 = addTax_1 + (47629 * 0.205)
    addTax_3 = addTax_2 + (52408 * 0.26)
    addTax_4 = addTax_3 + (62704 * 0.29)
    if myIncome < 47630:
        taxes = myIncome * 0.15
    elif myIncome >= 47630 and myIncome < 95259:
        taxes = addTax_1 + tempTax_1
    elif myIncome >= 95259 and myIncome < 147667:
        taxes = addTax_2 + tempTax_2
    elif myIncome >= 147667 and myIncome < 210371:
        taxes = addTax_3 + tempTax_3
    else:
        taxes = addTax_4 + tempTax_4
    return taxes
# input income and show taxes
income = input('Please input your income: $')
myTax = taxCal(income)
print('Your Taxes: $', int(myTax), '\n')
# test codes
def main():
    print('-----Test for email function----- \n')
    print(email('larry', 'shumlich'), '==>', email('larry', 'shumlich') == 'larry.shumlich@evolveu.ca')
    print(email('heiko', 'peters'), '==>', email('heiko', 'peters') == 'heiko.peters@evolveu.ca', '\n')

    print('-----Test for taxCal function----- \n')
    print(int(taxCal(100000)) == 18141 and int(taxCal(40000)) == 6000, '\n')
    print('------------Test Closed------------')

if __name__ == '__main__':
    main()
