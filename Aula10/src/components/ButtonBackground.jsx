import { useState, useEffect } from "react"

export default function ButtonBackground() {
    const [count, setCount] = useState(0)

    function handleColor () {
        const randomColor = `#${Math.floor(Math.random() * 777).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
    }

    useEffect(() => {
        handleColor()
    }, [count])

    return(
        <button onClick={() => {
            setCount((count) => count + 1);
            }}>
          count is {count}
        </button>
    )
}