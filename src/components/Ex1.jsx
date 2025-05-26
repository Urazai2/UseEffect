import { useState, useEffect } from 'react'

export function Ex1() {
    const [numero, setNumero] = useState(0)
    useEffect(() => {
        alert("Carreegou yaaay")
    }, [numero]) 

    return(
        <section>
            <h2>Exemplo 1</h2>
            <div>
                <p>Número: {numero}</p>
                <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            </div>
        </section>
    )
}