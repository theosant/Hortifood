import { Route, Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../Auth/Context';

export function PathAnalisys({ adminOnly, children }) {
  let token = parseInt(localStorage.getItem("token"));
  let user = JSON.parse(localStorage.getItem("user"))
  console.log(localStorage);

  var path = window.location.pathname;

  console.log(path.endsWith("back"))

  console.log("Caminho da URL:", path);
  let main_path = path.split("/")[1]; // principal componente do path
  let param = useParams()
  // console.log(param);
  // console.log(user.admin);
  console.log(adminOnly);

    if (!token && adminOnly) {
        return <Navigate to="/login" replace />;
    } else {
        if(!param){
            if(user.admin){
                console.log("aaaaaa");
                return <Navigate to={main_path + "/back/"} replace = {true}/>;
            }
        }
        else{
          if(user.admin){
              if(main_path === "produto"){
                  return <Navigate to={`/${main_path}/back/${param.id}`} replace = {true}/>;
              }
              else if(main_path === "produtos"){
                  return <Navigate to={`/${main_path}/back/${param.tipo}`} replace = {true}/>;
              }
              console.log("bbbbbb");
                // console.log("admin" + "/" + main_path + "back/" + param.id);
          }
        }
    }

  return children;
}