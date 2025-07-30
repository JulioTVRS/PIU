import { useState, useEffect } from "react"

export default function FormLogin() {
    const [login, setLogin] = useState("")
    const [palavrapasse, setPalavrapasse] = useState("")
    const [corDistinta, setCorDistinta] = useState(false)


    useEffect(() => {
        if (palavrapasse == "AlunoPIU") {
            document.body.style.backgroundColor = "green"
        } else {
            document.body.style.backgroundColor = "white"
        }
        
    }, [corDistinta])

    const handleSubmit = (e) => {
        e.preventDefault();
        setCorDistinta(!corDistinta)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Logar-se</h1>

            <label>
                <h4>Login</h4>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} required/>
            </label>
            
            <label>
                <h4>Senha</h4>
                <input type="text" value={palavrapasse} onChange={(e) => setPalavrapasse(e.target.value)} required/>
            </label>

            <br />

            <button type="submit">Enviar</button>
        </form>
    )
}