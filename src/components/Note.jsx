import React, {useContext} from 'react';
import NotesContext from '../contexts/notes-context';
import useMousePosition from './../hooks/useMousePosition';

/**
* @author VAK
* @function NoteList
**/

const Note = ({note, deleteNote}) => {
    const {notesDispatch} = useContext(NotesContext);
    const position = useMousePosition();

    return (
        <div>
            <h2>{position.x} {position.y}</h2>
            <h4 style={{
                display: "inline-block"
            }}>Title:
            </h4>
            {note.title}
            <br/>
            <h4 style={{
                display: "inline-block"
            }}>Descreption:
            </h4>
            {note.descreption}
            <button onClick={() => notesDispatch({type: 'DELETE_NOTE', title: note.title})}>
                <b>X</b>
            </button>
            <hr/>
        </div>
    )

}

export {Note as default}