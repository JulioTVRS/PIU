export default function Props (props) {
    return (
        <>
            <div>
                <h3>Props Teste</h3>
                <h4>Nome - {props.name}</h4>
                <h4>Novo Nome - {props.newname}</h4>
                <p>{props.atributo}</p>
                <div>{props.card}</div>
                <hr />
            </div>
        </>
    )
}