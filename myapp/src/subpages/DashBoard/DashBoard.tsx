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
        Progress
      </div>
    </div>
  );
};

const ExpenseSummary = () => {
  return (
    <div className="h-[50%]">
      <p className="py-1 font-medium">Expense summary</p>
      <div className="flex border-2 border-black rounded-[0.225rem] h-2/3">
        <div className="flex self-center justify-center flex-1 border-2">
          Content 1
        </div>
        <div className="flex self-center justify-center flex-1 border-2">
          Content 1
        </div>
        <div className="flex self-center justify-center flex-1 border-2">
          Content 1
        </div>
        <div className="flex self-center justify-center flex-1 border-2">
          Content 1
        </div>
      </div>
    </div>
  );
};

const Boxes = () => {
  return (
    <div className="flex col-span-4 row-span-2 border-2 justify-evenly">
      <div className="border-2 border-black rounded-[0.225rem] w-1/6">
        box 1
      </div>
      <div className="border-2 border-black rounded-[0.225rem] w-1/6">
        box 1
      </div>
      <div className="border-2 border-black rounded-[0.225rem] w-1/6">
        box 1
      </div>
      <div className="border-2 border-black rounded-[0.225rem] w-1/6">
        box 1
      </div>
    </div>
  );
};

const DashBoard = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid h-full grid-cols-4 m-6 border-2 grid-rows-12">
        <Boxes />
        <div className="col-span-4 row-span-5 border-2">Graphs</div>
        <div className="col-span-2 row-span-5 overflow-auto border-2">
          <RecentExpenses />
        </div>
        <div className="flex flex-col justify-center col-span-2 row-span-5 p-2 space-y-6 border-2">
          <Savings />
          <ExpenseSummary />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
