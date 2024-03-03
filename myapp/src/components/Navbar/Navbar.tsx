const Navbar = () => {
  return (
    <div className="flex justify-center h-[7vh] ">
      <div className="flex justify-between w-2/3 ">
        <div className="self-center text-3xl">CG</div>
        <div className="flex space-x-12 ">
          <p className="flex h-full p-2 text-center hover:border-b-2 hover:border-black hover:cursor-pointer ">
            <p className="self-center ">Home</p>
          </p>
          <p className="flex h-full p-2 text-center hover:border-b-2 hover:border-black hover:cursor-pointer ">
            <p className="self-center ">Products</p>
          </p>
          <p className="flex h-full p-2 text-center hover:border-b-2 hover:border-black hover:cursor-pointer ">
            <p className="self-center ">Pricing</p>
          </p>
          <p className="flex h-full p-2 text-center hover:border-b-2 hover:border-black hover:cursor-pointer ">
            <p className="self-center ">About</p>
          </p>
          <p className="flex h-full p-2 text-center hover:border-b-2 hover:border-black hover:cursor-pointer ">
            <p className="self-center ">Categories</p>
          </p>
        </div>

        <div className="flex justify-center space-x-4 lg:w-[15vw] ">
          <button className="bg-black hover:bg-white border hover:border border-black hover:border-black rounded-[0.225rem] w-[5vw] h-[3.5vh] text-white hover:text-black transition-all duration-200 self-center active:scale-95">
            Login
          </button>
          <button className="bg-black hover:bg-white border hover:border border-black hover:border-black rounded-[0.225rem] w-[5vw] h-[3.5vh] text-white hover:text-black transition-all duration-200 self-center active:scale-95">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
