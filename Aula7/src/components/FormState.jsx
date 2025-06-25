import { useState } from "react";

export default function FormState() {

    const [name,setName] = useState('')
    const [idade,setIdade] = useState('')
    const [bio,setBio] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, idade, bio);

        setName("");
        setIdade("");
        setBio("");
    }

    return(
        <div>
            <h1>FormState</h1>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" onChange={handleName} value={name}/>
                </label>

                <label>
                    <span>Idade:</span>
                    <input type="text" name="idade" onChange={(e) => setIdade(e.target.value)} value={idade}/>
                </label>

                <label>
                    <span>Bio:</span>
                    <input type="text" name="bio" onChange={(e) => setBio(e.target.value)} value={bio}/>
                </label>

                <h4 style={{marginBottom: "0px"}}>Nome: {name}</h4>
                <h4 style={{margin: "0px"}}>Idade: {idade}</h4>
                <h4 style={{marginTop: "0px"}}>Bio: {bio}</h4>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}