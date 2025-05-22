import { useState } from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div class="Card">
      <figure>
        <img 
          src={props.imagem} 
          alt="Imagem abstrata" 
        />
        <figcaption>{props.nome}</figcaption>
      </figure>
    </div>
  )
}
