import { useState, useEffect } from "react";

export default function EnviarDados() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [enviar, setEnviar] = useState(false);

  const API = "http://127.0.0.1:8000/alunos";

  useEffect(() => {
    const handleSubmit = async () => {
      if (!enviar) return;

      const novoAluno = {
        id: id,
        nome: nome,
        matricula: matricula,
      };

      try {
        await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(novoAluno),
        });
        setId("");
        setNome("");
        setMatricula("");
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
      } finally {
        setEnviar(false);
      }
    };

    handleSubmit();
  }, [enviar]);

  const onSubmit = (e) => {
    e.preventDefault();
    setEnviar(true);
  };

  return (
    <form onSubmit={onSubmit}>
        <input type="number" placeholder="ID" value={id} onChange={e => setId(e.target.value)}/>
        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
        <input type="text" placeholder="Matrícula" value={matricula} onChange={e => setMatricula(e.target.value)}/>
        <button type="submit">Enviar</button>
    </form>
  );
}
