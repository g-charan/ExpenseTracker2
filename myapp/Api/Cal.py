from datetime import date
import json


dataSet = [
  {
    "_id": "251e055e-8b47-11ee-b3d9-244bfe95b5c5",
    "category": "Food",
    "date": "2023-11-25",
    "day": 5,
    "month":1,
    "expense": 5000,
    "time": "09:30:17"
  },
  {
    "_id": "289450b0-8b47-11ee-a4a9-244bfe95b5c5",
    "category": "Food",
    "date": "2023-11-25",
    "day": 5,
    "month":1,
    "expense": 5000,
    "time": "09:30:23"
  },
  {
    "_id": "d8997b13-8b4b-11ee-9cad-244bfe95b5c5",
    "category": "Transport",
    "date": "2023-11-25",
    "day": 5,
    "month":1,
    "expense": 100,
    "time": "10:03:56"
  },
  {
    "_id": "96dd6fae-8b4c-11ee-aaad-244bfe95b5c5",
    "category": "Food",
    "date": "2023-11-25",
    "day": 5,
    "month":1,
    "expense": 100,
    "time": "10:09:15"
  },
  {
    "_id": "663c989a-b698-11ee-9e89-8cc6819b96a9",
    "category": "HouseHold",
    "date": "2024-01-19",
    "day": 4,
    "month":2,
    "expense": 10000,
    "time": "12:30:16"
  },
  {
    "_id": "6ef2eb82-bae8-11ee-b75b-c018506c2c03",
    "category": "Fuel",
    "date": "2024-01-25",
    "day": 3,
    "month":2,
    "expense": 1200,
    "time": "00:13:15"
  }
]

today = date.today()

moneyGoal = 60000
goalMonths = 12

expenseSum = 0
arr = []
months = 0
Total = 0

data = list(dataSet)
someData = json.dumps(data)
x = json.loads(someData)


for i in range(1,13):
    expenseSum = 0
    for y in x:
        if(y["month"]) == i:
            expenseSum = expenseSum + y["expense"]
    arr.insert(i-1,expenseSum)
print(arr)

for i in arr:
  if(i != 0):
    months = months + 1
    Total = Total + i
currentAvgSpend = Total/months
print(currentAvgSpend)

savingsPerMonth = moneyGoal/goalMonths
print(savingsPerMonth)

idealExpensesPerMonth = currentAvgSpend - savingsPerMonth

if(idealExpensesPerMonth < 0):
  print("Savings not possible")
else:
  print(idealExpensesPerMonth)
  
Categories = {
  "Food" : 0,
  "Transport": 1,
  "HouseHold": 3,
  "Fuel": 3,
}

for y in x:
   if(y["category"]) == y["category"]:
      print(y)

