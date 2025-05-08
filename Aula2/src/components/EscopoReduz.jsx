import "./EscopoReduz.css"

const EscopoReduz = () => {
    function handleClick() {
        return (
            alert("Handleclick")
        )
    }
    return (
        <>
            <button onClick={() => console.log("Você clicou!")}>Clique</button>
            <div>
                <button onClick={() => alert("Você clicou!")}>Alert</button>
            </div>
            <div>
                <button onClick={handleClick}>Handle</button>
            </div>
            <div className="container" onClick={() => alert("container")}>
                <p>Container</p>
            </div>
        </>
    )
}

export default EscopoReduz