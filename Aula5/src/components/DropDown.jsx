import React, { useState } from 'react';
import { topicos } from "../dados";

export default function DropDown() {
    const [aberto, setAberto] = useState(false);

    const toggleDropdown = () => {
        setAberto(!aberto);
    };

    return (
        <div>
            <button onClick={toggleDropdown} style={{ fontSize: '20px', padding: '10px' }}>
                Dropdown {aberto ? '▲' : '▼'}
            </button>

            {aberto && (
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
                    {topicos.map((topico, index) => (
                        <li key={index} style={{ fontSize: '25px', padding: '5px 0' }}>
                            {topico}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
