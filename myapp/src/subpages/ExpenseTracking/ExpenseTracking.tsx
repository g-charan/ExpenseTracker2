const RecentExpenses = () => {
  return (
    <div className="col-span-3 p-4 row-span-8">
      <div className="flex justify-between w-full p-2">
        <p className="text-lg font-medium">Recent Expenses</p>
        <div className="space-x-4">
          <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 active:scale-95">
            View
          </button>
          <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-20 text-white hover:text-black transition-all duration-200 active:scale-95">
            Edit
          </button>
        </div>
      </div>
      <div className="w-full border-2 border-black rounded-sm">
        <table className="w-full">
          <tr className="border-b border-black">
            <th className="py-4 text-lg">Category</th>
            <th className="py-4 text-lg">Amount</th>
            <th className="py-4 text-lg">Date</th>
            <th className="py-4 text-lg">Time</th>
          </tr>
          <tr className="text-center border-b border-black">
            <td className="py-8 text-base">Food</td>
            <td>Rs 2000</td>
            <td>22/03/2024</td>
            <td>10:30pm</td>
          </tr>
          <tr className="text-center border-b border-black">
            <td className="py-8 text-base">Category</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
          <tr className="text-center border-b border-black">
            <td className="py-8 text-base">Category</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const ExpenseTracking = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-1 w-[95%] self-center">
        <div className="grid h-auto grid-flow-col grid-cols-5 space-x-2 space-y-1 grid-rows-8">
          <RecentExpenses />
          <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
            <p className="self-start mb-6 text-lg italic">Average</p>
            <p className="self-center text-6xl -translate-y-5">Rs 2000</p>
          </div>
          <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
            <p className="self-start mb-6 text-lg italic">Today</p>
            <p className="self-center text-6xl -translate-y-5">Rs 2000</p>
          </div>
          <div className="flex flex-col self-center justify-center w-5/6 col-span-2 row-span-2 p-10 text-lg border-2 border-black rounded-md justify-self-center h-fit">
            <p className="self-start mb-6 text-lg italic">Total</p>
            <p className="self-center text-6xl -translate-y-5">Rs 2000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracking;
