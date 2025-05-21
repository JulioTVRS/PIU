import './Card.css'
import screen from '../assets/rat.jpg'

export default function Card() {
    return (
        <div>
            <figure>
                <img src={screen} alt="Imagem abstrata" />
                <figcaption>Imagem abstrata específica</figcaption>
            </figure>
        </div>
    )
    
}