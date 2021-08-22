import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { isLoggedIn } from "../../Redux/selectors/auth";

interface Props{
  path:string,
}

const ProtectedRoute:React.FC<Props>= ({
  path,
  children
})=> {

  const isAuthorized = useSelector(isLoggedIn);

  return(
    <Route path={path} exact >
      {isAuthorized? children : <Redirect to = '/' />}
    </Route>
  )
}

export default ProtectedRoute;
