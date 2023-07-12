import { Route, Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../Auth/Context';

export function PathAnalisys({ logged, children }) {
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"));

    let isAdmin = user && user.admin;
        
    let path = window.location.pathname;

    let main_path = path.split("/")[1]; // principal componente do path
    let param = useParams()

    if (!token && logged) {
        return <Navigate to="/login" replace />;
    } else {
        if(!param){
            if(isAdmin)
                return <Navigate to={main_path + "/back/"} replace = {true}/>;
        }
        else{
            if(isAdmin){
                if(main_path === "produto")
                    return <Navigate to={`/${main_path}/back/${param.id}`} replace = {true}/>;
                else if(main_path === "produtos")
                    return <Navigate to={`/${main_path}/back/${param.tipo}`} replace = {true}/>;
            }
        }
    }

    return children;
}