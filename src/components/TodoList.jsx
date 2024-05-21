import { useForm } from '../hook/useForm'
import { useReducer } from 'react'

const initialState = [{
    id: new Date().getTime(),
    description: 'Learn React',
    done: false
}]

// Recibe el estado actual y la acción que se va a ejecutar y devuelve un nuevo estado
const todoReducer = (taskState = initialState, action = {}) => {
    switch (action.type) {
        case '[TASK] Add':
            return [...taskState, action.payload];
        case '[TASK] Done':
            return taskState.map(task => {
                if (task.id === action.payload) {
                    return { ...task, done: !task.done };
                }
                return task;
            });
        case '[TASK] Delete':
            console.log('Delete');
            return taskState.filter(task => task.id !== action.payload);
        case '[TASK] Reset':
            return [];
        default:
            return taskState;
    }
}

export const TodoList = () => {

    const { task, formState, onInputChange } = useForm({ task: '' })

    // Se pasa el reducer, el estado inicial y la función que se encarga de inicializar el estado
    // Va a devolver un estado y un dispatch, que es una función que se encarga de disparar las acciones
    const [taskState, dispatch] = useReducer(todoReducer, initialState)

    const addTaskForm = (event) => {
        event.preventDefault();
        if (formState.task.trim() === '') return;
        const newTask = {
            id: new Date().getTime(),
            description: formState.task,
            done: false
        }
        console.log(newTask)
        const action = {
            type: '[TASK] Add',
            payload: newTask

        }
        dispatch(action)
    }

    const taskDone = (id) => {
        const action = {
            type: '[TASK] Done',
            payload: id
        };
        dispatch(action);
    };

    const deleteTask = (id) => {
        const action = {
            type: '[TASK] Delete',
            payload: id
        };
        dispatch(action);
    }

    const resetList = () => {
        const action = {
            type: '[TASK] Reset',
            payload: ''
        };
        dispatch(action);
    }

    return (
        <>
            <form onSubmit={addTaskForm}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="task"
                        name="task"
                        placeholder="Add Task"
                        onChange={onInputChange}
                        value={task}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-warning" onClick={resetList}>Reset</button>
            </form>

            <hr />

            <ul className="list-group">
                {taskState.map(task => {
                    return (
                        <li key={task.id} className="list-group-item d-flex justify-content-between">
                            <span>{task.description}</span>
                            <div>
                                <input type="checkbox" value={task.done} onChange={() => taskDone(task.id)} />
                                <button className='btn btn-danger' onClick={() => deleteTask(task.id)}>Delete</button>

                            </div>
                        </li>
                    )
                })}

            </ul>
        </>
    );
}
