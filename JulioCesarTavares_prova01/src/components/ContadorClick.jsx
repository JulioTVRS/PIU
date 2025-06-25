import { useState } from "react"; // Aqui ele vai importar o useState para ser possível usar no contador

export default function ContadorClick({tipo}) { 
    const [count, setCount] = useState(0) // Define o count como zero e o setCount (Que serve para mudar o valor)


    // Os botões abaixo incremento somam usando o setCount e o de decremento subtrai usando o setCount só que com o valor atual do count subtraido
    // Ambos os botões usam uma função anônima para simplificar o processo, e pela falta de necessidade de uma função definida para o caso
    // O h1 ele apenas apresenta o count atual
    return (
        <>
            <h1>Contador: {count}</h1> 
            <button style={{backgroundColor: count > 10 ? "green" : "white" }} onClick={() => setCount((count) => count + 1)}>Botão incremento</button>
            <button style={{backgroundColor: count < 0 ? "red" : "white" }} onClick={() => setCount((count) => count - 1)}>Botão decremento</button>
        </>
    );
}