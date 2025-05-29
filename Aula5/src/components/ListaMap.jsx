import { nomes } from "../dados"

export default function ListaMap() {

    return (
        <div>
            {nomes.map(nome => (
                <li style={{fontSize: '25px'}}>{nome}</li>
            ))}
        </div>
    )
}