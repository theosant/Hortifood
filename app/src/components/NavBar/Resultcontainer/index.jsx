import "./index.css";
import { Link } from "react-router-dom";
const Resultcontainer = ({list}) => {

    return(
        <div style={{position: "fixed", width: "44%", top: "45px"}}>
            <div className="list_container">
            {
                !list.length ?
                <div style={{padding: "5px"}}>Sem resultados</div>
                :
                <div className="list_group">
                    {list.map((resultado) =>
                        <div>
                            <Link to={`produto/${resultado.id}`} key={resultado.id} className="list-group-item">{resultado.name}</Link>
                            <br/>
                        </div>
                    )}
                </div>
            }
            </div>
        </div>
    )
}

export default Resultcontainer;