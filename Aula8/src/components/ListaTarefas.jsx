import { useState } from "react";
import "./ListaTarefas.css"

export default function ListaTarefas() {
    const [tarefas, setTarefas] = useState([])
    const [tarefa, setTarefa] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setTarefas([...tarefas, tarefa])
        setTarefa("")
    }

    return(
        <div>
            <h1>Lista de Tarefas</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Nome da tarefa" onChange={(e) => (setTarefa(e.target.value))} value={tarefa}/>
                </label>

                <input type="submit" value="Enviar"/>
            </form>

            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            <button onClick={() => (setTarefas([]))}>Resetar</button>
        </div>
    );
}