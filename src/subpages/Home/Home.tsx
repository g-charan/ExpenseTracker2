import img from "../../assets/SlideShowImages/1.png";

const SlideShow = () => {
  return (
    <div className="relative flex justify-center w-full h-[50vh] ">
      <div className="flex justify-center w-full h-full self-center">
        <img src={img} className="max-w-[100vw] max-h-[50vh] self-center" />
      </div>
      <button className="top-1/2 left-10 absolute border-2 p-2 rounded-full ">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <button className="top-1/2 right-10 absolute border-2 p-2 rounded-full">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className="flex justify-center border-2 ">
        <div className="flex border-black w-full">
          <SlideShow />
        </div>
      </div>
      <div className="flex justify-center space-x-12 border-2 w-full h-12 ">
        <p className=" self-center">
          TRACK YOUR EXPENSES AS YOU GO & PREDICT YOUR EXPENSES
        </p>
        <div className="flex space-x-4 w-80 h-2/3 self-center">
          <button className="bg-black hover:bg-white border hover:border border-black hover:border-black rounded-[0.225rem] w-36 text-white hover:text-black transition-all duration-200 active:scale-95">
            Start Tracking
          </button>
          <button className="bg-black hover:bg-white border hover:border border-black hover:border-black rounded-[0.225rem] w-36 text-white hover:text-black transition-all duration-200 active:scale-95">
            Predict
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full ">
        <div className="flex justify-center border-2 w-2/3">
          WHY SHOULD YOU USE OUR APP
        </div>
      </div>
    </div>
  );
};

export default Home;
