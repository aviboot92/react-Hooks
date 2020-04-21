import React, {Fragment, useContext} from 'react';
import Note from './Note';
import NotesContext from './../contexts/notes-context';

const NoteList = (props) => {
    // console.log('I am Notes Array', props.notes);
    const {deleteNote} = props;
    const {notes} = useContext(NotesContext);
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