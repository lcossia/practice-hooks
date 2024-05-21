import { useCounter } from "../hook/useCounter"

export const CounterComponent = () => {

    const { counter, increment, reset, decrease } = useCounter(0)

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrease(1, false)}>-1</button>
        </>
    )
}
