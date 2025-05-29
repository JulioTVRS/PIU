import { times } from "../dados"

export default function ListaFilter() {
    const maiordetodos = times.filter(time => time === "Flamengo")

    return (
        <div>
            <ul>
                {maiordetodos.map(maior => (
                    <li style={{fontSize: '36px'}}>
                        {maior}
                    </li>
                ))}
            </ul>
        </div>
    )
}