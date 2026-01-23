import BackgroundImage from "../../../assets/loginImg.jpg";

const Login = () => {
  return (
    <main className="flex">
      <div className="w-1/2 relative h-screen overflow-hidden bg-zinc-950">
        <img
          src={BackgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="w-1/2"></div>
    </main>
  );
};

export default Login;
