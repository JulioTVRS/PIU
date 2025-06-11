import { useState } from 'react';

export default function ListItem({Item, index}) {
    const [TarefaConcluida, setTarefaConcluida] = useState(false);

    return (
        <>
            {TarefaConcluida ? "" : 
            (
                <div className="ItemContainer" style={{display: 'flex'}}>  
                    <button className="ItemButton" onClick={() => setTarefaConcluida(true)}>Concluir</button>

                    <div className="ListItem">
                        <p className="Item" key={index}>{Item}</p> 
                    </div>
                </div>
            )}
        </>
    );
}