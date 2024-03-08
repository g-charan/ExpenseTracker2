const RecentExpenses = () => {
  return (
    <div className="col-span-5 p-4 row-span-8">
      <div className="flex justify-between w-full p-2">
        <p className="text-lg font-medium">Subscriptions</p>
        <div className="space-x-4">
          <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 active:scale-95">
            Edit
          </button>
        </div>
      </div>
      <div className="w-full rounded-sm">
        <div className="flex flex-col gap-4">
          <div className="flex justify-around border-2 border-black rounded-md w-full h-[6rem]">
            <p className="self-center text-3xl">Netflix</p>
            <p className="self-center">Category: TV Shows</p>
            <p className="self-center">Amount:Rs 2000</p>

            <p className="self-center">Months: 12</p>
            <p className="self-center">Next_payment: 08-03-2024</p>
            <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 self-center active:scale-95">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Subscriptions = () => {
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

export default Subscriptions;
