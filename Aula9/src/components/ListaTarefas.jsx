import { useState } from "react";
import "./ListaTarefas.css";

export default function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState({ texto: "", estado: "andamento" , data_criacao: new Date()});
    const [tarefasFiltradas, setTarefasFiltradas] = useState(tarefas)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarefa.texto.trim() !== "") {
            const novasTarefas = [...tarefas, tarefa]
            setTarefas(novasTarefas)
            setTarefa({ ...tarefa, texto: "", estado: "andamento" })
            setTarefasFiltradas(novasTarefas)
        }
    };

    const atualizarEstado = (index, novoEstado) => {
        const novasTarefas = tarefas.map((item, i) =>
            i === index ? { ...item, estado: novoEstado } : item
        );
        setTarefas(novasTarefas)
        setTarefasFiltradas(novasTarefas)
    };
    
    const atualizarFiltro = (tipoFiltro) => {
        if (tipoFiltro === "all") {
            setTarefasFiltradas(tarefas)
        } else if (tipoFiltro === "concluido") {
            setTarefasFiltradas(tarefas.filter(trf => trf.estado === "concluido"))
        } else if (tipoFiltro === "andamento"){
            setTarefasFiltradas(tarefas.filter(trf => trf.estado === "andamento"))
        } else if (tipoFiltro === "naoconcluido"){
            setTarefasFiltradas(tarefas.filter(trf => trf.estado === "naoconcluido"))
        }
    };


    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Nome da tarefa" onChange={(e) => setTarefa({ ...tarefa, texto: e.target.value })} value={tarefa.texto}/>
                </label>

                <input type="submit" value="Enviar" />

                
            </form>

            <button onClick={() => atualizarFiltro("concluido")}>Filtrar por concluídas</button>
            <button onClick={() => atualizarFiltro("andamento")}>Filtrar por em andamento</button>
            <button onClick={() => atualizarFiltro("naoconcluido")}>Filtrar por não concluídas</button>
            <button onClick={() => atualizarFiltro("all")}>Remover filtro</button>

            {tarefasFiltradas.map((item, index) => (
                <div
                    key={index} className="Tarefa"
                    style={{backgroundColor: item.estado === "andamento"
                                ? "lightgray"
                                : item.estado === "concluido"
                                ? "lightgreen"
                                : "lightcoral"
                    }}>
                    <p style={{ margin: 0 }}>{item.texto} - {new Date(item.data_criacao).toLocaleString("pt-BR")}</p>
                    <div>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "concluido")}>
                            ✔
                        </button>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "naoconcluido")}>
                            X
                        </button>
                        <button className="TarefaButton" onClick={() => atualizarEstado(index, "andamento")}>
                            🚶
                        </button>
                    </div>
                </div>
            ))}

            <button onClick={() => {setTarefas([]); setTarefasFiltradas([])}} style={{ margin: "10px", padding: "5px 10px" }}>
                Resetar
            </button>
        </div>
    );
}
