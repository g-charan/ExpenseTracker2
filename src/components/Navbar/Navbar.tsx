const Navbar = () => {
  return (
    <div className="flex justify-center border-2 h-[7vh] ">
      <div className="flex justify-between border-black w-2/3">
        <div className="text-3xl self-center">CG</div>
        <div className="flex space-x-12 ">
          <p className="flex p-2 hover:border-b-2 hover:border-black h-full text-center hover:cursor-pointer ">
            <p className=" self-center">Home</p>
          </p>
          <p className="flex p-2 hover:border-b-2 hover:border-black h-full text-center hover:cursor-pointer ">
            <p className=" self-center">Products</p>
          </p>
          <p className="flex p-2 hover:border-b-2 hover:border-black h-full text-center hover:cursor-pointer ">
            <p className=" self-center">Pricing</p>
          </p>
          <p className="flex p-2 hover:border-b-2 hover:border-black h-full text-center hover:cursor-pointer ">
            <p className=" self-center">About</p>
          </p>
          <p className="flex p-2 hover:border-b-2 hover:border-black h-full text-center hover:cursor-pointer ">
            <p className=" self-center">Categories</p>
          </p>
        </div>

        <div className="flex justify-center space-x-4 w-[15vw] ">
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
