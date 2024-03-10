import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type addingObj = {
  adding: boolean;
  setAdding: (a: boolean) => void;
};

const addingGoalsContext = createContext<addingObj>({
  adding: false,
  setAdding(a) {},
});

const url = "http://127.0.0.1:5000/goals";

//PostForm

const Postform = () => {
  const add = useContext(addingGoalsContext);
  const adding = add.adding;
  const setAdding = add.setAdding;
  const [form, setForm] = useState({
    amount: "",
    days: "",
  });

  const postData = async () => {
    try {
      const resp = await axios.post(url, {
        amount: form.amount,
        days: form.days,
      });
      setAdding(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`backdrop-blur-md flex  justify-center self-center absolute h-full bg-opacity-40 bg-white  border-black  w-full ${
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
          <label id="Email">Amount</label>
          <input
            type="text"
            id="Email"
            className="p-1 border-2 border-slate-700"
            value={form.amount}
            onChange={(e) => {
              setForm({ ...form, amount: e.target.value });
            }}
          ></input>
          <label id="Email">Months</label>
          <input
            type="text"
            id="Email"
            className="p-1 border-2 border-slate-700"
            value={form.days}
            onChange={(e) => {
              setForm({ ...form, days: e.target.value });
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

//Recent Goals

const RecentGoals = () => {
  const [data, setData] = useState([]);
  const add = useContext(addingGoalsContext);
  const adding = add.adding;
  const setAdding = add.setAdding;

  type goalsObj = {
    category: string;
    Amount: String;
    MonthsRemaining: String;
  };

  const getData = async () => {
    try {
      const resp = await axios.get(url);
      const data = resp.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [adding]);
  return (
    <div className="col-span-3 p-4 row-span-8">
      <div className="flex justify-between w-full p-2">
        <p className="text-lg font-medium">Recent Goals</p>
        <div className="space-x-4">
          <button
            onClick={() => setAdding(true)}
            className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 active:scale-95"
          >
            Add
          </button>
          <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 active:scale-95">
            Edit
          </button>
        </div>
      </div>
      <div className="rounded-sm w-full h-[85vh] overflow-auto">
        <div className="flex flex-col gap-4">
          {data &&
            data.map((data: goalsObj) => (
              <div className="flex justify-around border-2 border-black rounded-md w-full h-[6rem]">
                <p className="self-center text-3xl">{data.category}</p>
                <p className="self-center">Amount: {data.Amount}</p>
                <p className="self-center">Months: {data.MonthsRemaining}</p>
                <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 self-center active:scale-95">
                  View
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

//Main Goals Page

const Goals = () => {
  const [adding, setAdding] = useState<boolean>(false);
  return (
    <addingGoalsContext.Provider value={{ adding, setAdding }}>
      <div className="flex flex-col w-full">
        <div className="flex-1 w-[95%] self-center">
          <div className="relative grid h-auto grid-flow-col grid-cols-5 space-x-2 space-y-1 grid-rows-8">
            <Postform />
            <RecentGoals />
            <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
              <p className="self-start mb-6 text-lg italic">Current Goal:</p>
              <p className="self-center text-6xl">Rs 50,000</p>
            </div>
            <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
              <p className="self-start mb-6 text-lg italic">Progress</p>
              <p className="self-center text-6xl">20%</p>
              <p className="self-center text-sm italic">
                Three more weeks to go...
              </p>
            </div>
          </div>
        </div>
      </div>
    </addingGoalsContext.Provider>
  );
};

export default Goals;
