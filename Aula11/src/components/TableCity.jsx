import { useState, useEffect } from 'react';

export default function TableName() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carregar, setCarregar] = useState(false);

  useEffect(() => {
    if (!carregar) return;

    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
        setCarregar(false);
      }
    };

    fetchUsuarios();
  }, [carregar]);

  const handleClick = () => {
    setLoading(true);
    setCarregar(true);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Lista de Names</h1>
      <button onClick={handleClick}>Buscar Cidades</button>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.address.city}</li>
        ))}
      </ul>
    </div>
  );
}
