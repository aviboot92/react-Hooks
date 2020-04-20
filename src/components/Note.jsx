import React from 'react';

/**
* @author VAK
* @function NoteList
**/

const Note = ({note, deleteNote}) => {
    return (
        <div>
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
            <button onClick={() => deleteNote(note.title)}>
                <b>X</b>
            </button>
            <hr/>
        </div>
    )

}

export {Note as default}