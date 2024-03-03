import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex  items-center  gap-5 max-w-7xl mx-auto flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-2xl font-bold text-center mb-5">
              Welcome Back to <span className="text-green-500">BlogVista</span>
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 space-y-5">
              <button className="py-2 rounded px-3 bg-green-500 text-white uppercase font-bold">
                Login
              </button>
            </div>
            <p className="text-center">OR</p>
            <div className="text-center">
              <button className="py-2 bg-slate-200 rounded px-4 text-white uppercase font-bold">
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
