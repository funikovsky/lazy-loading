
import { FC, useMemo, useState } from 'react';


interface AddTodoProps {
    addTodo: (note: string) => void
}

export const AddTodo: FC<AddTodoProps> = ({ addTodo }) => {

    const [note, setNote] = useState<string>('')

    const disable = useMemo(() => {

        return note.length < 10

    }, [note])

    const addNote = () => {

        if (!note) return

        addTodo(note)
        setNote('')
    }

    

    return (
        <>
            <input type="text" onChange={(e) => setNote(e.target.value)} value={note} />
            <button style={{background : disable? 'red': 'green'}} onClick={addNote}>Добавить</button>
        </>
    )
}