import { useState, useEffect } from "react";

export default function EffectAPIForm() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(0);
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        if (count === 0) return;

        setLoading(true);

        const novoPost = {
            id: id,
            descricao: descricao,
            prioridade: 0,
            concluida: false
        };

        const enviarTarefas = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/tarefas", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(novoPost)
                });
                const data = await response.json();
                console.log("Resposta da API:", data);
            } catch (error) {
                console.log("Erro ao enviar dados:", error);
            } finally {
                setLoading(false);
            }
        };

        enviarTarefas();
    }, [count]);


    const handleSubmit = (e) => {
        e.preventDefault(); 
        setId(0)
        setDescricao("")
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </label>

                <br/>

                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </label>

                <br />

                <button type="submit" onClick={() => setCount(count+1)}>Enviar</button>
            </form>
        </>
    )

}