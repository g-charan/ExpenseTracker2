import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type ExpenseObj = {
  category: String;
  expense: String;
  date: String;
  time: String;
};

type addingObj = {
  adding: boolean;
  setAdding: (a: boolean) => void;
};

const addingContext = createContext<addingObj>({
  adding: false,
  setAdding(a) {},
});

const url: String = "http://127.0.0.1:5000/expenses";

const url2: String = "http://127.0.0.1:5000/dailyexpenses";

const PostingForm = () => {
  const add = useContext(addingContext);
  const adding = add.adding;
  const setAdding = add.setAdding;
  const [form, setForm] = useState({
    category: "",
    expense: "",
  });

  const postData = async () => {
    try {
      const resp = await axios.post(url, {
        category: form.category,
        expense: form.expense,
      });
      setAdding(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`backdrop-blur-md flex  justify-center self-center absolute h-full  border-black  w-full ${
        adding ? "visible " : " hidden"
      }`}
    >
      <div className="relative self-center p-20 border-2 border-black">
        <button
          className="absolute top-0 text-2xl right-2"
          onClick={() => setAdding(false)}
        >
          x
        </button>
        <div className="flex flex-col gap-2">
          <label id="Email">Category</label>
          <input
            type="text"
            id="Email"
            className="p-1 border-2 border-slate-700"
            value={form.category}
            onChange={(e) => {
              setForm({ ...form, category: e.target.value });
            }}
          ></input>
          <label id="Email">Amount</label>
          <input
            type="text"
            id="Email"
            className="p-1 border-2 border-slate-700"
            value={form.expense}
            onChange={(e) => {
              setForm({ ...form, expense: e.target.value });
            }}
          ></input>
          <button
            onClick={postData}
            className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 self-center active:scale-95"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const RecentExpenses = () => {
  const add = useContext(addingContext);

  const [expenses, setExpenses] = useState<ExpenseObj[]>([]);

  const getData = async () => {
    try {
      const resp = await axios.get(url);

      const data = resp.data;

      setExpenses(data);
    } catch (error: any) {
      console.log(error.resp);
    }
  };
  useEffect(() => {
    getData();
  });

  return (
    <div className="h-full col-span-3 p-4 row-span-8">
      <div className="flex justify-between w-full p-2">
        <p className="text-lg font-medium">Recent Expenses</p>
        <div className="space-x-4">
          <button
            onClick={() => add.setAdding(true)}
            className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 active:scale-95"
          >
            Add
          </button>
          <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 active:scale-95">
            Edit
          </button>
        </div>
      </div>
      <div className="border-2 border-black rounded-sm w-full h-[85vh] overflow-auto">
        <table className="w-full">
          <tr className="border-b border-black">
            <th className="py-4 text-lg">Category</th>
            <th className="py-4 text-lg">Amount</th>
            <th className="py-4 text-lg">Date</th>
            <th className="py-4 text-lg">Time</th>
          </tr>

          {expenses &&
            expenses.map((data) => {
              return (
                <tr className="text-center border-b border-black">
                  <td className="py-8 text-base">{data.category}</td>
                  <td>{data.expense}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

const ExpenseTracking = () => {
  const [daily, setdaily] = useState<String>();
  const [total, settotal] = useState<String>();

  const [adding, setAdding] = useState<boolean>(false);

  const url3: String = "http://127.0.0.1:5000/totalexpenses";

  const getData = async () => {
    try {
      const resp = await axios.get(url2);
      const resp2 = await axios.get(url3);
      const data = resp.data;
      const data2 = resp2.data;
      settotal(data2);
      setdaily(data);
    } catch (error: any) {
      console.log(error.resp);
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <addingContext.Provider value={{ adding, setAdding }}>
      <div
        className={`flex flex-col w-full h-full relative ${
          adding ? "" : "bg-none"
        }`}
      >
        <PostingForm />
        <div className="flex-1 w-[95%] self-center">
          <div className="grid h-auto grid-flow-col grid-cols-5 space-x-2 space-y-1 grid-rows-8">
            <RecentExpenses />
            <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
              <p className="self-start mb-6 text-lg italic">Average</p>
              <p className="self-center text-6xl">Rs </p>
            </div>
            <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
              <p className="self-start mb-6 text-lg italic">Today</p>
              <p className="self-center text-6xl">Rs {daily}</p>
            </div>
            <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
              <p className="self-start mb-6 text-lg italic">Total</p>
              <p className="self-center text-6xl">Rs {total}</p>
            </div>
          </div>
        </div>
      </div>
    </addingContext.Provider>
  );
};

export default ExpenseTracking;
