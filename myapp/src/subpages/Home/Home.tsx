import img from "../../assets/SlideShowImages/1.png";

const SlideShow = () => {
  return (
    <div className="relative flex justify-center w-full h-[50vh] ">
      <div className="flex self-center justify-center w-full h-full">
        <img src={img} className="max-w-[100vw] max-h-[50vh] self-center" />
      </div>
      <button className="absolute p-2 border-2 rounded-full top-1/2 left-10 ">
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
      <button className="absolute p-2 border-2 rounded-full top-1/2 right-10">
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

const TagLine = () => {
  return (
    <div className="flex justify-center w-full h-12 space-x-12 border-2 ">
      <p className="self-center ">
        TRACK YOUR EXPENSES AS YOU GO & PREDICT YOUR EXPENSES
      </p>
      <div className="flex self-center space-x-4 w-80 h-2/3">
        <button className="bg-black hover:bg-white border hover:border border-black hover:border-black rounded-[0.225rem] w-36 text-white hover:text-black transition-all duration-200 active:scale-95">
          Start Tracking
        </button>
        <button className="bg-black hover:bg-white border hover:border border-black hover:border-black rounded-[0.225rem] w-36 text-white hover:text-black transition-all duration-200 active:scale-95">
          Predict
        </button>
      </div>
    </div>
  );
};

const BoxItems = () => {
  return (
    <div className="flex justify-center w-full mt-10 ">
      <div className="flex flex-col justify-center w-2/3 gap-6 ">
        <p className="self-center text-2xl">WHY SHOULD YOU USE OUR APP</p>
        <div className="flex self-center w-full justify-evenly">
          <p className="border-2 w-[14vw] h-[15vh]">Item 1</p>
          <p className="border-2 w-[14vw] h-[15vh]">Item 1</p>
          <p className="border-2 w-[14vw] h-[15vh]">Item 1</p>
          <p className="border-2 w-[14vw] h-[15vh]">Item 1</p>
        </div>
      </div>
    </div>
  );
};

const ImageContentLeft = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex justify-between w-2/3 border-2 ">
        <div className="flex justify-center border-2 w-1/2 h-[25vw]">
          <p className="self-center ">Image</p>
        </div>
        <div className="w-1/2 border-2 ">Right Side</div>
      </div>
    </div>
  );
};

const ImageContentRight = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex justify-between w-2/3 border-2 ">
        <div className="w-1/2 border-2 ">LeftSide</div>
        <div className="flex justify-center border-2 w-1/2 h-[25vw]">
          <p className="self-center ">Image</p>
        </div>
      </div>
    </div>
  );
};

const Boxes = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex justify-between w-2/3 border-2 ">
        <div className="flex justify-center border-2 w-1/2 h-[25vw]">
          <p className="self-center ">BOX 1</p>
        </div>
        <div className="flex justify-center border-2 w-1/2 h-[25vw]">
          <p className="self-center ">BOX 2</p>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex justify-between w-2/3 border-2 ">
        <div className="flex mx-20 w-1/2 h-[20vw]">
          <p className="self-center text-2xl">CONTACT FORM</p>
        </div>
        <div className="flex justify-center mr-20 w-1/2 h-[20vw]">
          <div className="flex flex-col self-center w-full space-y-4 k">
            <input type="email" placeholder="Email" className="p-2 border-2" />
            <textarea
              placeholder=" Write Here..."
              className="border-2 p-2 h-[15vh] "
            />
            <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-28 text-white hover:text-black transition-all duration-200 active:scale-95">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DownloadForm = function () {
  return (
    <div className="flex justify-center mt-16 border-2">
      <div className="flex w-2/3">
        <div className="flex justify-center mx-20 w-full h-[20vw]">
          <div className="flex flex-col self-center gap-4">
            <p className="self-center text-2xl">DOWNLOAD OUR APP</p>
            <p className="mb-3 w-[30vw] text-center ">
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and OUR APP
            </p>
            <div className="self-center mt-2 space-x-10">
              <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-36 text-white hover:text-black transition-all duration-200 active:scale-95">
                Apple Store
              </button>
              <button className="bg-black hover:bg-white p-1 border hover:border border-black hover:border-black rounded-[0.225rem] w-36 text-white hover:text-black transition-all duration-200 active:scale-95">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-center border-2 ">
        <div className="flex w-full border-black">
          <SlideShow />
        </div>
      </div>
      <TagLine />
      <BoxItems />
      <ImageContentLeft />
      <ImageContentRight />
      <Boxes />
      <ContactForm />
      <DownloadForm />
      <div className="flex justify-center w-full border-t-2 border-black">
        <div className="flex w-[90vw]">
          <div className="flex flex-col justify-center border-2 mx-20 w-full h-[20vw]">
            <div className="grid grid-cols-5 grid-rows-5 h-2/3 ">
              <p className="border-2 row-span-5 p-2 w-[16rem]">1</p>
              <p className="border-2 row-span-5 p-2 w-[16rem] ">2</p>
              <p className="border-2 row-span-5 p-2 w-[16rem] ">3</p>
              <p className="border-2 row-span-5 p-2 w-[16rem] ">4</p>
              <p className="border-2 row-span-5 p-2 w-[16rem] ">5</p>
            </div>
            <div>Copyright</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
