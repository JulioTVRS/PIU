import { useState, useEffect } from "react";

export default function Albuns() {
    const [id, setID] = useState(0);
    const [albuns, setAlbuns] = useState([]);
    const [albunsFiltrados, setAlbunsFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadAgain, setLoadAgain] = useState(false);

    useEffect(() => {
        setLoading(true)

        const fetchAlbuns = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums");
                const data = await response.json();
                setAlbuns(data);
                const filtro = albuns.filter((album => album.userId === id));
                setAlbunsFiltrados(filtro);
            } catch (error) {
                console.log("Erro ao receber tarefas:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchAlbuns()
        
    }, [id])

    useEffect(() => {
        setLoading(true)

        const fetchAlbuns = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums");
                const data = await response.json();
                setAlbuns(data);
                const filtro = albuns.filter((album => album.userId === id));
                setAlbunsFiltrados(filtro);
            } catch (error) {
                console.log("Erro ao receber tarefas:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchAlbuns()
        
        setLoadAgain(false)
    }, [loadAgain])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadAgain(true)
    }

    if (loading === true) {
        return (
            <h1>Carregando</h1>
        )
    }

    return (
        <>
            <h1>{id}</h1>

            <ul>
                {albunsFiltrados.map(album => (
                    <li key={album.id}>{album.title} -- {album.userId}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                
                <label>
                    <input type="number" value={id} onChange={(e) => setID(parseInt(e.target.value))}/>
                </label>
                <button type="submit">Receber dados</button>
            </form>
        </>
    )

}