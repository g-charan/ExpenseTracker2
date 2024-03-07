const RecentExpenses = () => {
  return (
    <div className="col-span-5 p-4 row-span-8">
      <div className="flex justify-between w-full p-2">
        <p className="text-lg font-medium">Goal Probability</p>
        <div className="space-x-4">
          <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-24 text-white hover:text-black transition-all duration-200 active:scale-95">
            Start Now
          </button>
        </div>
      </div>
      <div className="w-full rounded-sm">
        <div className="flex flex-col gap-4">
          <div className="grid w-full grid-cols-4 p-10 border-2 border-black rounded-md h-fit">
            <div className="self-center col-span-4 p-4 text-3xl justify-self-center">
              Goal
            </div>
            <div className="col-span-2 p-2 mx-20 my-10 space-y-6">
              <p>AMount:2000</p>
              <p>Months:12</p>
              <p>Possibility: 98%</p>
              <p>Average Spend per month: 12</p>
              <p>Suggestion: go for it...</p>
            </div>
            <div className="col-span-2 my-10">
              <div className="h-full text-center border-2 border-black">
                Graph
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalStatus = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-1 w-[95%] self-center">
        <div className="grid h-auto grid-flow-col grid-cols-5 space-x-2 space-y-1 grid-rows-8">
          <RecentExpenses />
        </div>
      </div>
    </div>
  );
};

export default GoalStatus;
