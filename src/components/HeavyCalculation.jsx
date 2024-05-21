import { useMemo, useState } from 'react'



export const HeavyCalculation = () => {

    const [numberList, setnumberList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const [show, setShow] = useState(true)

    const addNumber = () => {
        setnumberList([...numberList, numberList[numberList.length - 1] + 1])
    }

    // useMemo se utiliza para memorizar un valor y evitar que se recalcule en cada renderizado
    // Se le pasa una función y un array de dependencias
    // Si las dependencias no cambian, el valor se mantiene igual
    // Si no se utiliza, cada vez que se renderiza el componente se ejecuta la función
    const getCalculation = (numberList) => useMemo(() => {
        console.log('Heavy calculation is running');
        return numberList.reduce((acc, item) => acc * item, 1)
    }, [numberList])

    return (
        <>
            <h2>Calculo: </h2>
            <p>{getCalculation(numberList)}</p>

            <button className='btn btn-primary' onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
            <button className='btn btn-primary' onClick={() => addNumber()}>Add number</button>
        </>
    )
}
