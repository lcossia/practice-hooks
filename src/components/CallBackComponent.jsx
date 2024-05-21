import { useCallback, useState } from 'react'
import { Increment } from './Increment'

export const CallBackComponent = () => {

    const [counter, setcounter] = useState(0)

    // UseCallback se utiliza para memorizar una función y evitar que se renderice de nuevo si sus dependencias no cambian
    // Se utiliza con React.memo cuando pasamos una función como prop a un componente
    // La alternativa es hacer un helper con la lógica aparte.
    const incrementFather = useCallback(
        (num) => {
            setcounter(c => c + num)
        }, [])


    return (
        <>
            <h3>Counter: {counter}</h3>
            <Increment increment={incrementFather}></Increment>
        </>
    )
}
