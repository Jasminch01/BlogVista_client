import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useForm } from "react-hook-form";
const Login = () => {
  const { signInGoogle, logInWithEmaillPass } = UseAuth();
  const { handleSubmit, reset, register } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const googleLogin = () => {
    signInGoogle()
      .then((res) => {
        console.log(location.state)
        console.log(res)
          navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submit = ({ email, password }) => {
    logInWithEmaillPass(email, password)
      .then((res) => {
        console.log(res);
        const user = res.user;
        if (user) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.log(` the error is `, error);
      });
    reset();
  };

  return (
    <div className="hero min-h-screen bg-[#e6f3ff]">
      <div className="flex  items-center  gap-5 max-w-7xl mx-auto flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(submit)} className="card-body">
            <div className="mb-5">
              <h1 className="text-2xl font-bold text-center">
                Welcome Back to{" "}
                <span className="text-green-400">BlogVista</span>
              </h1>
              <p className="text-center">
                {`Don't`} have Account yet?{" "}
                <Link to={`/sign-up`} className="text-green-400">
                  Sign up
                </Link>{" "}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                id="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 space-y-5">
              <button
                type="submit"
                className="p-3 rounded bg-green-400 text-white uppercase font-bold"
              >
                Login
              </button>
            </div>
            <p className="text-center">OR</p>
            <div className="text-center">
              <button
                onClick={googleLogin}
                className="py-2 bg-slate-200 rounded px-4 text-white uppercase font-bold"
              >
                <FcGoogle size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
