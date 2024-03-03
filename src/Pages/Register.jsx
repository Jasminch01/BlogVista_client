import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex  items-center  gap-5 max-w-7xl mx-auto flex-col lg:flex-row-reverse">
        <div className="card w-96 shrink-0 shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="mb-5">
              <h1 className="text-2xl font-bold text-center">
                Register{" "}
                <span className="text-green-400">BlogVista</span>
              </h1>
              <p className="text-center">{`Don't`} Already have Account ? <Link to={`/login`} className="text-green-400">login</Link> </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="p-3 rounded bg-green-400 text-white uppercase font-bold">
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

export default Register;
