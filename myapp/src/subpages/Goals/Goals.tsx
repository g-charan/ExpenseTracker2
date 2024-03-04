const RecentExpenses = () => {
  return (
    <div className="col-span-3 p-4 row-span-8">
      <div className="flex justify-between w-full p-2">
        <p className="text-lg font-medium">Recent Expenses</p>
        <div className="space-x-4">
          <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 active:scale-95">
            Edit
          </button>
        </div>
      </div>
      <div className="w-full rounded-sm">
        <div className="flex flex-col gap-4">
          <div className="flex justify-around border-2 border-black rounded-md w-full h-[6rem]">
            <p className="self-center text-3xl">Goal-1</p>
            <p className="self-center">Amount:Rs 2000</p>
            <p className="self-center">Months: 12</p>
            <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 self-center active:scale-95">
              View
            </button>
          </div>
          <div className="flex justify-around border-2 border-black rounded-md w-full h-[6rem]">
            <p className="self-center text-3xl">Goal-1</p>
            <p className="self-center">Amount:Rs 2000</p>
            <p className="self-center">Months: 12</p>
            <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 self-center active:scale-95">
              View
            </button>
          </div>
          <div className="flex justify-around border-2 border-black rounded-md w-full h-[6rem]">
            <p className="self-center text-3xl">Goal-1</p>
            <p className="self-center">Amount:Rs 2000</p>
            <p className="self-center">Months: 12</p>
            <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 self-center active:scale-95">
              View
            </button>
          </div>
          <div className="flex justify-around border-2 border-black rounded-md w-full h-[6rem]">
            <p className="self-center text-3xl">Goal-1</p>
            <p className="self-center">Amount:Rs 2000</p>
            <p className="self-center">Months: 12</p>
            <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 self-center active:scale-95">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Goals = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-1 w-[95%] self-center">
        <div className="grid h-auto grid-flow-col grid-cols-5 space-x-2 space-y-1 grid-rows-8">
          <RecentExpenses />
          <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
            <p className="self-start mb-6 text-lg italic">Current Goal:</p>
            <p className="self-center text-6xl -translate-y-5">Rs 50,000</p>
          </div>
          <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
            <p className="self-start mb-6 text-lg italic">Progress</p>
            <p className="self-center text-6xl -translate-y-5">20%</p>
            <p className="self-center text-sm italic">
              Three more weeks to go...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
