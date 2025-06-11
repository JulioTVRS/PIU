import { useState } from "react"; // Aqui ele vai importar o useState para ser possível usar no contador

export default function ContadorClick({tipo}) { 
    const [count, setCount] = useState(0) // Define o count como zero e o setCount (Que serve para mudar o valor)


    if (count > 10) { // IF que pega o elemento pelo ID, para alcançar o botão e trocar a cor do incremento para verde se maior que 10. Também reseta a cor do decremento
        document.getElementById("Incremento").style.backgroundColor = 'green'
        document.getElementById("Decremento").style.backgroundColor = 'white'
    } else if (count < 0) { // ELSE IF para se o contador estiver negativo ele resetar a cor do incremento e definir a cor do decremento
        document.getElementById("Incremento").style.backgroundColor = 'white'
        document.getElementById("Decremento").style.backgroundColor = 'red'
    }

    // Os botões abaixo incremento somam usando o setCount e o de decremento subtrai usando o setCount só que com o valor atual do count subtraido
    // Ambos os botões usam uma função anônima para simplificar o processo, e pela falta de necessidade de uma função definida para o caso
    // O h1 ele apenas apresenta o count atual
    return (
        <>
            <h1>Contador: {count}</h1> 
            <button id="Incremento" onClick={() => setCount((count) => count + 1)}>Botão incremento</button>
            <button id="Decremento" onClick={() => setCount((count) => count - 1)}>Botão decremento</button>
        </>
        
    );
}