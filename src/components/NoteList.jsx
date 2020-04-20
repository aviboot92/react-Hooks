import React, {Fragment} from 'react';
import Note from './Note';

const NoteList = (props) => {
    // console.log('I am Notes Array', props.notes);
    const {notes, deleteNote} = props;

    return (
        <Fragment>
            <h3>NOTES:</h3>
            {notes.length !== 0 && notes.map((note, i) => {
                return (
                    <Fragment>
                        <Note note = {note} deleteNote={deleteNote}/>
                    </Fragment>
                )
            })}
        </Fragment>
    )
}

export {NoteList as default};