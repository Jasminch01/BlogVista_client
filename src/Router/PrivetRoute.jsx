import PropTypes from "prop-types";
import { pulsar } from "ldrs";
import UseAuth from "../Hooks/UseAuth";
import { Navigate } from "react-router-dom";

pulsar.register();

const PrivetRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  if (loading) {
    return (
      <div className="h-screen text-center flex justify-center items-center">
        <l-pulsar size="40" speed="1.75" color="black"></l-pulsar>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivetRoute;
