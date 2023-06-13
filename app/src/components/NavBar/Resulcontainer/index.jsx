
const Resulcontainer = ({list}) => {
    if(!list.length){
        return(
            <h2>Sem resultados :(</h2>
        )
    }
    return(
        <div className="result-container">
            <h2>Resultados<span></span></h2>
            <ul className="list-group">
                {list.map((resultado) => <li key={resultado.id} className="list-group-item">{resultado.name}</li>)}
            </ul>
        </div>
    )
}

export default Resulcontainer