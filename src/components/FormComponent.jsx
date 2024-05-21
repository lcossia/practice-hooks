import { useEffect, useRef } from "react"
import { useForm } from "../hook/useForm"

export const FormComponent = () => {

    // Guarda una referncia de un elemento del DOM
    const focusRef = useRef()

    const initialForm = () => ({
        userName: "",
        email: "",
        password: "",
    })

    // Otra alternativa, si se hace spread operator del objeto formState en el hook, se obtienen los valores de los inputs
    const { userName, email, password, formState, onInputChange } = useForm(initialForm)

    // Sino, destructuramos el objeto formState para obtener los valores de los inputs
    //const { userName, email, password } = formState;

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    // useEffect se ejecuta una sola vez, cuando el componente se renderiza por primera vez
    useEffect(() => {
        focusRef.current.focus()
    }, [])


    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">User name</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter your Username"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    ref={focusRef}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >Submit
            </button>
        </form>
    )
}
