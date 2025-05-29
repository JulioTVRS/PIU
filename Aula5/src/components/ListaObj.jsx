import { obj } from "../dados"

export default function ListasObj() {
    const selecionados = obj.filter(selecionado => selecionado.idade > 10)

    return (
        <div>
            <ul>
                {selecionados.map(selecionado => (
                    <li style={{fontSize: '35px'}} key={selecionado.id}>
                        <p>O nome selecionado foi {selecionado.nome}.</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}