import { Route, Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../Auth/Context';

export function PathAnalisys({ adminOnly, children }) {
  let token = parseInt(localStorage.getItem("token"));
  let user = JSON.parse(localStorage.getItem("user"))
  var path = window.location.pathname;

  let main_path = path.split("/")[1]; // principal componente do path
  let param = useParams()

    if (!token && adminOnly) {
        return <Navigate to="/login" replace />;
    } else {
        if(!param){
            if(user.admin)
                return <Navigate to={main_path + "/back/"} replace = {true}/>;
        }
        else{
            if(user.admin){
                if(main_path === "produto")
                    return <Navigate to={`/${main_path}/back/${param.id}`} replace = {true}/>;
                else if(main_path === "produtos")
                    return <Navigate to={`/${main_path}/back/${param.tipo}`} replace = {true}/>;
            }
        }
    }

    return children;
}