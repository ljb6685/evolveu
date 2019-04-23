import csv
f2 = open("Census_by_Community_2018.csv", newline='')
reader = csv.reader(f2)
header = next(reader)
line_counter = 0
data = []
dic={}

with open("report.txt", "w") as file:
    for row in reader:
        print(header[0], row[0])
        print(header[4], row[4])
        data.append(row)
        dic[header[0]] = row[0]
        dic[header[4]] = row[4]
        line_counter += 1
        file.write("Data "+str(line_counter)+" ---> "+str(dic)+"\n")
    file.write("Total: "+str(line_counter))
