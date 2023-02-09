import { Navigate } from "react-router-dom";

function Redirect({ to }) {
  return <Navigate to={to}></Navigate>;
}

export default Redirect;
