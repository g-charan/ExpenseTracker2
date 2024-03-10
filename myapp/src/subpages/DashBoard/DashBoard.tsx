import { LineChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://127.0.0.1:5000/dailyexpenses";

const url2 = "http://127.0.0.1:5000/monthlyexpenses";

const url3 = "http://127.0.0.1:5000/totalexpenses";

type boxObj = {
  today: String;
  total: String;
};

let testing: boolean = false;

const RecentExpenses = () => {
  return (
    <div className="h-full">
      <p className="pt-1 h-[10%] font-medium">Recent Expenses </p>
      <div className="flex flex-col border-2 border-black rounded-[0.225rem] h-[90%]">
        <div className="flex justify-around flex-1 w-full border-b-2 border-black">
          <p className="self-center">Food</p>
          <p className="self-center">Rs 2000</p>
          <p className="self-center">23/03/2003</p>
          <p className="self-center font-extralight">10min ago....</p>
        </div>
        <div className="flex justify-around flex-1 w-full border-b-2 border-black">
          <p className="self-center">Food</p>
          <p className="self-center">Rs 2000</p>
          <p className="self-center">23/03/2003</p>
          <p className="self-center font-extralight">10min ago....</p>
        </div>
        <div className="flex justify-around flex-1 w-full border-b-2 border-black">
          <p className="self-center">Food</p>
          <p className="self-center">Rs 2000</p>
          <p className="self-center">23/03/2003</p>
          <p className="self-center font-extralight">10min ago....</p>
        </div>
        <div className="flex justify-around flex-1 w-full border-b-2 border-black">
          <p className="self-center">Food</p>
          <p className="self-center">Rs 2000</p>
          <p className="self-center">23/03/2003</p>
          <p className="self-center font-extralight">10min ago....</p>
        </div>
      </div>
    </div>
  );
};

const Savings = () => {
  return (
    <div className="h-[50%]">
      <p className="py-1 font-medium">Savings</p>
      <div className="border-2 border-black rounded-[0.225rem] h-2/3">
        <div className="flex flex-col justify-center px-4 py-1">
          <p className="text-3xl">15%</p>
          <div className="flex-1 border-2 border-black rounded-md">
            <div className="w-1/6 h-4 bg-black"></div>
          </div>
          <div className="flex justify-between flex-1">
            <p>Rs 0</p>
            <p>Rs 3000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpenseSummary = () => {
  return (
    <div className="h-[50%]">
      <p className="py-1 font-medium">Expense summary</p>
      <div className="flex border-2 border-black rounded-[0.225rem] h-2/3">
        <div className="flex self-center justify-center flex-1">
          <div className="flex flex-col">
            <p className="self-center text-4xl">70%</p>
            <p className="self-center">Food</p>
          </div>
        </div>
        <div className="flex self-center justify-center flex-1">
          <div className="flex flex-col">
            <p className="self-center text-3xl">20%</p>
            <p className="self-center">Food</p>
          </div>
        </div>
        <div className="flex self-center justify-center flex-1">
          <div className="flex flex-col">
            <p className="self-center text-2xl">8%</p>
            <p className="self-center">Food</p>
          </div>
        </div>
        <div className="flex self-center justify-center flex-1">
          <div className="flex flex-col">
            <p className="self-center text-xl">2%</p>
            <p className="self-center">Food</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Boxes = (props: boxObj) => {
  return (
    <div
      className={`flex col-span-4 row-span-2 ${
        testing && "border-2"
      } justify-evenly`}
    >
      <div className="border-2 border-black rounded-[0.225rem] w-1/6">
        <div className="flex flex-col gap-1 p-4">
          <p>Total</p>
          <h1 className="self-center text-5xl">Rs {props.total}</h1>
        </div>
      </div>
      <div className="border-2 border-black rounded-[0.225rem] w-1/6">
        <div className="flex flex-col gap-1 p-4">
          <p>Today</p>
          <h1 className="self-center text-5xl">Rs {props.today}</h1>
        </div>
      </div>
      <div className="border-2 border-black rounded-[0.225rem] w-1/6">
        <div className="flex flex-col gap-1 p-4">
          <p>Savings</p>
          <h1 className="self-center text-5xl">10,000</h1>
        </div>
      </div>
      <div className="border-2 border-black rounded-[0.225rem] w-1/6">
        <div className="flex flex-col gap-1 p-4">
          <p>Today Prediction</p>
          <h1 className="self-center text-5xl">10,000</h1>
        </div>
      </div>
    </div>
  );
};

const DashBoard = () => {
  const [monthly, setMonthly] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [today, setToday] = useState<String>("");

  const [total, settotal] = useState<String>("");

  const getBarChartData = async () => {
    try {
      const resp = await axios.get(url2);
      const resp2 = await axios.get(url);
      const resp3 = await axios.get(url3);
      setMonthly(resp.data);
      setToday(resp2.data);
      settotal(resp3.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBarChartData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div
        className={`grid h-full grid-cols-4 m-6 ${
          testing && "border-2"
        } grid-rows-12`}
      >
        <Boxes today={today} total={total} />
        <div
          className={`flex w-full col-span-4 row-span-5 ${
            testing && "border-2"
          }`}
        >
          <div
            className={`w-1/2 p-4 ${testing && "border-2"}border-2 rounded-lg`}
          >
            <BarChart
              series={[{ data: monthly }]}
              height={290}
              xAxis={[
                {
                  data: [
                    "Jan",
                    "Feb",
                    "March",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sept",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  scaleType: "band",
                },
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
          <div
            className={`w-1/2 p-4 ${testing && "border-2"}border-2 rounded-lg`}
          >
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={300}
            />
          </div>
        </div>
        <div
          className={`col-span-2 row-span-5 overflow-auto ${
            testing && "border-2"
          }`}
        >
          <RecentExpenses />
        </div>
        <div
          className={`flex flex-col justify-center col-span-2 row-span-5 p-2 space-y-6 ${
            testing && "border-2"
          }`}
        >
          <Savings />
          <ExpenseSummary />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
