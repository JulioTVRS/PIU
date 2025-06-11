import { useState } from "react";
import { carros } from "./dados_carro"; // Importando a variável carros a ser utilizada na listagem

export default function ListaCarros({}) { 

    const CarrosVermelhos = carros.filter((carro => carro.cor === 'vermelho')) // carros.filter definido na variável para pegar apenas os carros da array de objetos que possuem a cor vermelha 

    return (
        <>
            <h1>Lista de carros</h1>

            {/* carros.map para mapear, usando 'carro' para definir cada carro individual,
            como estamos usando uma array de objetos, usa-se 'carro.modelo' e 'carro.ano' para pegar o modelo e ano.
            O key dentro de li passa o id do carro para que seja possível o encontrar e evitar erros*/}
            <ul> 
                {carros.map(carro => (
                    <li key={carro.id}>Modelo: {carro.modelo}, Ano: {carro.ano}</li>
                ))}
            </ul>

            <h2>Carros de cor Vermelha</h2>

            {/* Aqui o map funciona da mesma forma, com exceção de que ele está usando o CarrosVermelhos, que é a array filtrada,
            usando apenas os objetos (carros) que possuem a cor vermelha*/}
            <ul>
                {CarrosVermelhos.map(carro => (
                    <li key={carro.id}>Modelo: {carro.modelo}</li>
                ))}
            </ul>
        </>
    );
}