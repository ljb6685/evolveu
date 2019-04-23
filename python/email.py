def email(fname, lname):
    return '{0}.{1}@evolveu.ca'.format(fname, lname)

result1=email('larry', 'shumlich')
result2=email('heiko', 'peters')
print(result1+'\n'+result2)

def main():
    print('*Email Test*')
    print('==>', result1 == 'larry.shumlich@evolveu.ca')
    print('==>', result2 == 'heiko.peters@evolveu.ca')

if __name__ == '__main__':
    main()
