from flask import Flask,request,jsonify
from datetime import date
from flask_pymongo import PyMongo
import json
from bson import ObjectId
import bson.json_util
import uuid
from flask_cors import CORS
from datetime import date,datetime,time


app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb+srv://charangutti:Cherry27@apitest.rmm5vxo.mongodb.net/AIF"
db = PyMongo(app).db

today = 0
a = 0
current_Time = 0


@app.route("/get_data" , methods = ["GET"])
def home_page():
    if request.method == "GET":
      data = list(db.Expenses.find({}))
    someData = json.dumps(data)
    x = json.loads(someData)

    return x

@app.route('/expenses',  methods = ["GET", "POST"])
def expenses():
    data = list(db.Expenses.find({}))
    someData = json.dumps(data)
    x = json.loads(someData)
    if (request.method == "GET"):
      return x
    
    if(request.method == "POST"):
      recieved_data = request.get_json()
      category = recieved_data["category"]
      expense = recieved_data["expense"]
      # smtg = json.dumps({ "category" : category, "expense": expense})
      # y = json.loads(smtg)
      today = date.today()
      day = today.weekday()
      month = today.month
      a = datetime.now()
      current_Time = a.strftime('%H:%M:%S')
      db.Expenses.insert_one({"category": category, "expense": int(expense), "_id": str(uuid.uuid1()), "date": str(today), "month": month, "day":day, "time":current_Time})
      return "ok"

@app.route('/expenses/<string:_id>',  methods = ["GET","DELETE"])
def expenses2(_id):
    data = list(db.Expenses.find({}))
    someData = json.dumps(data)
    x = json.loads(someData)
    if (request.method == "GET"):
      for y in x:
         if y["_id"] == _id:
            return jsonify(y)
    if (request.method == "DELETE"):
       db.Expenses.delete_one({"_id" : _id})
       return "ok"
    
@app.route('/dailyexpenses', methods = ["GET"])
def dailyexp():
    data = list(db.Expenses.find({}))
    someData = json.dumps(data)
    x = json.loads(someData)
    arr = []
    today = date.today()
    day = today.weekday()

    if(request.method == "GET"):
       for y in x:
          if(y["date"] == f"{today}"):
             arr.append(y["expense"])
             sum= 0
             for c in arr:
                sum = sum + int(c)
          else:
             sum = 0
       return str(sum)
       
@app.route('/totalexpenses',methods = ["GET"])
def totalExp():
   data = list(db.Expenses.find({}))
   someData = json.dumps(data)
   x = json.loads(someData)
   arr = []
   today = date.today()
   day = today.weekday()
   if(request.method == "GET"):
       for y in x:
             arr.append(y["expense"])
             sum= 0
             for c in arr:
                sum = sum + int(c)
   return str(sum)

@app.route('/monthlyexpenses',methods = ["GET"])
def monthlyExp():
  arr = []
  data = list(db.Expenses.find({}))
  someData = json.dumps(data)
  x = json.loads(someData)
  for i in range(1,13):
     expensesum = 0
     for y in x:
        if(y["month"]) == i:
           expensesum = expensesum + y["expense"]
     arr.insert(i-1,expensesum)
  return arr

  # for i in range(1,13):
  #   expenseSum = 0
  #   for y in x:
  #       if(y["month"]) == i:
  #           expenseSum = expenseSum + y["expense"]
  #   arr.insert(i-1,expenseSum)


@app.route('/goalstatus',methods = ["POST"])
def goalStatus():
  arr = []
  months = 0
  Total = 0
  data = list(db.Expenses.find({}))
  someData = json.dumps(data)
  x = json.loads(someData)
  for i in range(1,13):
     expensesum = 0
     for y in x:
        if(y["month"]) == i:
           expensesum = expensesum + y["expense"]
     arr.insert(i-1,expensesum),
  for i in arr:
     if(i != 0):
        months = months + 1
        Total = Total + i
  currentAvgSpend = Total/months
  if(request.method == "POST"):
     recievedData = request.get_json()
     moneyGoal = recievedData["Amount"]
     monthstoAchieve = recievedData["MonthsRemaining"]
     savingsPerMonth = moneyGoal/monthstoAchieve
     idealExpensesPerMonth = currentAvgSpend - savingsPerMonth
     if(idealExpensesPerMonth < 0):
        return "Savings not possible"
     else:
        return jsonify(idealExpensesPerMonth)

   # for i in arr:
   #    if(i != 0):
   #    months = months + 1
   #    Total = Total + i
   # currentAvgSpend = Total/months
  


@app.route('/reminders')
def reminders():
  x = {
    "id": 1,
    "Category": "BasketBall",
    "DateAdded": date.today(),
    "Status": True,
  }
  return x

@app.route('/goals',  methods = ["GET", "POST"])
def goals():
    data = list(db.Goals.find({}))
    someData = json.dumps(data)
    x = json.loads(someData)
    if (request.method == "GET"):
      return x
    
    if(request.method == "POST"):
      recieved_data = request.get_json()
      amount = recieved_data["amount"]
      daystoAch = recieved_data["days"]
      # smtg = json.dumps({ "category" : category, "expense": expense})
      # y = json.loads(smtg)
      today = date.today()
      day = today.weekday()
      month = today.month
      a = datetime.now()
      current_Time = a.strftime('%H:%M:%S')
      db.Goals.insert_one({"category": "Goal", "Amount": int(amount),"MonthsRemaining":int(daystoAch), "_id": str(uuid.uuid1()), "date": str(today), "month":month,"day":day, "time":current_Time})
      return "ok"

@app.route('/goals/<string:_id>',  methods = ["GET","DELETE"])
def goals2(_id):
    data = list(db.Goals.find({}))
    someData = json.dumps(data)
    x = json.loads(someData)
    if (request.method == "GET"):
      for y in x:
         if y["_id"] == _id:
            return y
    if (request.method == "DELETE"):
       db.Goals.delete_one({"_id" : _id})
       return "ok"

if __name__ == "__main__":
  # app.run(host="0.0.0.0", port=5000, debug=True)
   app.run( port=5000, debug=True)