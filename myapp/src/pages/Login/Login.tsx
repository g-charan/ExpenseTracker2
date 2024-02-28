const LoginForm = () => {
  return (
    <div className=" flex flex-col w-1/2 gap-4">
      <p className=" self-center ">LOGIN</p>
      <input
        type="text"
        className=" border-2 h-10 rounded-sm p-2 "
        placeholder="Username"
      />
      <input
        type="text"
        className=" border-2 h-10 rounded-sm p-2 "
        placeholder="Password"
      />
      <a className=" self-end underline">Forgot password</a>
      <button className=" rounded-full bg-black text-white text-center h-10 hover:bg-white hover:border-2 hover:border-black hover:text-black ">
        Login
      </button>
    </div>
  );
};

const Image = () => {
  return (
    <div className="flex justify-center self-center border-2 h-full w-[50vw] rounded-tl-3xl rounded-l-3xl bg-black text-center text-white m-0">
      <p className=" self-center">IMAGE</p>
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex w-full justify-evenly m-0 ">
      <div className=" w-[50%] h-screen flex justify-center m-0  ">
        <div className="flex self-center w-full justify-center">
          <LoginForm />
        </div>
      </div>
      <div className=" w-[50%] h-screen m-0">
        <div className="flex self-center w-full justify-center h-screen">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default Login;
