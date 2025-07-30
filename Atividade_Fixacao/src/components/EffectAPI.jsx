import { useState, useEffect } from "react";

export default function EffectAPI() {
    const [count, setCount] = useState(0);
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        const fetchTarefas = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/tarefas");
                const data = await response.json();
                setTarefas(data);
            } catch (error) {
                console.log("Erro ao receber tarefas:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchTarefas()
    }, [count])

    if (loading === true) {
        return (
            <h1>Carregando</h1>
        )
    }

    return (
        <>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id}>{tarefa.descricao}</li>
                ))}
            </ul>

            <button onClick={() => setCount(count + 1)}>Receber dados</button>
        </>
    )

}