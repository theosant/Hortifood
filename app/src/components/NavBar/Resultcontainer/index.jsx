import "./index.css";

const Resultcontainer = ({list}) => {

    return(
        <div style={{position: "fixed", width: "44%", top: "45px"}}>
            <div className="list_container">
            {
                !list.length ?
                <>Sem resultados</>
                :
                <div className="list_group">
                    {list.map((resultado) => <p key={resultado.id} className="list-group-item">{resultado.name}</p>)}
                </div>
            }
            </div>
        </div>
    )
}

export default Resultcontainer;