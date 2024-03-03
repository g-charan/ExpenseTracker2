import { useEffect, useState } from "react";
import img2 from "../../assets/BoxImages/Tracking.png";
import img3 from "../../assets/BoxImages/predictions.png";
import community from "../../assets/LandingPageImages/community.jpg";
import Slide1 from "../../assets/SlideShowImages/1.jpg";
import Slide2 from "../../assets/SlideShowImages/2.jpg";
import Slide3 from "../../assets/SlideShowImages/3.jpg";

const SlideShow = () => {
  const images = [{ image: Slide1 }, { image: Slide2 }, { image: Slide3 }];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };
  console.log(currentSlide);

  return (
    <div className="relative flex justify-center bg-black w-full h-[65vh]">
      <div className="flex self-center justify-center w-full h-full">
        <img
          src={images[currentSlide].image}
          className="max-w-[100vw] max-h-[65vh] self-center"
        />
      </div>
      <button
        className="absolute p-2 rounded-full top-1/2 left-10"
        onClick={goToPrevSlide}
      >
        <svg
          className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            color="white"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <button
        className="absolute p-2 rounded-full top-1/2 right-10"
        onClick={goToNextSlide}
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            color="white"
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
    <div className="flex justify-center w-full h-16 p-2 space-x-12 border-b-2">
      <p className="self-center text-lg">
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
    <div className="flex justify-center w-full mt-10">
      <div className="flex flex-col justify-center w-2/3 gap-6">
        <p className="self-center p-4 text-3xl">WHY SHOULD YOU USE OUR APP</p>
        <div className="flex self-center w-full justify-evenly">
          <div className="flex flex-col justify-center space-y-3 border-2 bg-black p-4 border-black rounded-md w-[15vw] h-[15vh] text-white">
            <p className="text-xl">Predict Your Next Move</p>
            <p className="pr-10 text-xs">
              The app helps you to stay on your toes about your most predictable
              next move
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-3 border-2 bg-black p-4 border-black rounded-md w-[15vw] h-[15vh] text-white">
            <p className="text-xl">Track anything & Anywhere</p>
            <p className="pr-10 text-xs">
              The app helps you to stay on your toes about your most predictable
              next move
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-3 border-2 bg-black p-4 border-black rounded-md w-[15vw] h-[15vh] text-white">
            <p className="text-xl">Data Privacy</p>
            <p className="pr-10 text-xs">
              The app helps you to stay on your toes about your most predictable
              next move
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-3 border-2 bg-black p-4 border-black rounded-md w-[15vw] h-[15vh] text-white">
            <p className="text-xl">Advance Statistics</p>
            <p className="pr-10 text-xs">
              The app helps you to stay on your toes about your most predictable
              next move
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageContentLeft = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex justify-between w-2/3">
        <div className="flex justify-center w-1/2 h-[25vw]">
          <img src={community} />
        </div>
        <div className="self-start w-1/2 mt-20 space-y-4">
          <p className="my-2 text-3xl mx-14">TITLE HEADING</p>
          <p className="mx-14">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and
          </p>
        </div>
      </div>
    </div>
  );
};

const ImageContentRight = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex justify-between w-2/3">
        <div className="self-start w-1/2 mt-20 space-y-4">
          <p className="my-2 text-3xl mx-14">TITLE HEADING</p>
          <p className="mx-14">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and
          </p>
        </div>
        <div className="flex justify-center w-1/2 h-[25vw]">
          <img src={community} />
        </div>
      </div>
    </div>
  );
};

const Boxes = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex justify-between w-2/3 gap-1">
        <div className="flex justify-center w-1/2 h-[25vw]">
          <div className="flex flex-col gap-4 p-10 text-white bg-black border-2 border-black rounded-2xl">
            <img src={img2} className="self-center w-1/3" />
            <p className="self-center text-3xl">Tracking </p>
            <p className="self-center">
              AI in financial apps automates expense tracking, detects
              anomalies, predicts spending, optimizes budgets, manages
              portfolios, monitors credit scores, offers NLP-based interactions,
              automates customer support, detects fraud, and provides
              personalized insights and recommendations for better financial
              management.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-1/2 h-[25vw]">
          <div className="flex flex-col gap-4 p-10 text-white bg-black border-2 border-black rounded-2xl">
            <img src={img3} className="self-center w-1/3" />
            <p className="self-center text-3xl">Predicting</p>
            <p>
              Predicting expenses in financial apps leverages AI algorithms to
              analyze past spending patterns, identify trends, and forecast
              future expenses. By providing users with insights into their
              upcoming financial obligations, it empowers them to budget
              effectively, plan ahead, and achieve their financial goals with
              greater confidence and control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex justify-between w-2/3">
        <div className="flex mx-20 w-1/2 h-[20vw]">
          <p className="self-center text-2xl">CONTACT FORM</p>
        </div>
        <div className="flex justify-center mr-20 w-1/2 h-[20vw]">
          <div className="flex flex-col self-center w-full space-y-4 k">
            <input
              type="email"
              placeholder="Email"
              className="p-2 border-2 rounded-md"
            />
            <textarea
              placeholder=" Write Here..."
              className="border-2 p-2 rounded-md h-[15vh]"
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
    <div className="flex justify-center mt-16 text-white bg-black border-t-2 border-black">
      <div className="flex w-2/3">
        <div className="flex justify-center mx-20 w-full h-[20vw]">
          <div className="flex flex-col self-center gap-4">
            <p className="self-center text-2xl">DOWNLOAD OUR APP</p>
            <p className="mb-3 w-[30vw] text-center">
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and OUR APP
            </p>
            <div className="self-center mt-2 space-x-10">
              <button className="hover:border-white bg-white hover:bg-black p-1 border hover:border border-black rounded-[0.225rem] w-36 text-black hover:text-white transition-all duration-200 active:scale-95">
                Apple Store
              </button>
              <button className="border-white hover:border-white bg-white hover:bg-black p-1 border hover:border rounded-[0.225rem] w-36 text-black hover:text-white transition-all duration-200 active:scale-95">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-center w-full border-t-2 border-black">
      <div className="flex w-[90vw]">
        <div className="flex flex-col justify-center w-full h-[20vw]">
          <div className="grid grid-cols-5 grid-rows-5 justify-items-center h-2/3">
            <div className="row-span-5 p-2 w-[12rem]">
              <p className="my-4 text-2xl">CG</p>
              <p className="mb-2 font-medium">Contact Information</p>
              <p>asdhak@gmail.com</p>
              <p>Phone: +91 6304260972</p>
            </div>
            <div className="row-span-5 p-2 w-[12rem]">
              <p className="p-2 my-4 text-lg font-medium">Accounts</p>
              <p className="">Family Accounts</p>
              <p>Individual Accounts</p>
              <p>Business Accounts</p>
            </div>
            <div className="row-span-5 p-2 w-[12rem]">
              <p className="my-4 text-lg font-medium">Help</p>
              <p className="">Customer Service</p>
              <p>Service Status</p>
              <p>Community</p>
              <p>Offline Location</p>
            </div>
            <div className="row-span-5 p-2 w-[12rem]">
              <p className="my-4 text-lg font-medium">Work with us</p>
              <p className="">Open Jobs</p>
              <p>GitHub Repo</p>
            </div>
            <div className="row-span-5 p-2 w-[12rem]">
              <p className="my-4 text-lg font-medium">Follow Us</p>
              <p className="">LinkedIn</p>
              <p>Whatsapp</p>
              <p>Facebook</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className="mt-2 border-t border-black w-[90%] self-center">
            <p className="py-4 text-xs px-7">Copyright@2024 by Charan Gutti</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
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
      <Footer />
    </div>
  );
};

export default Home;
