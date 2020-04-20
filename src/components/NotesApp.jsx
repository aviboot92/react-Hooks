import React, {Fragment, useState, useEffect, useReducer} from 'react';
import notesReducer from './../reducers/notesReducer';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';


const NotesApp = () => {
    const [notes,
        notesDispatch] = useReducer(notesReducer ,[]);

    useEffect(()=>{
      const notes = JSON.parse(localStorage.getItem('notes'));
      // localStorage.removeItem('notes');
      console.log('I am notes from local storage', notes);
      const notesArr = !!notes ? notes : [];
      notesDispatch({type: "GET_NOTES", notes: notesArr});
    },[])

    useEffect(()=>{
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])


    const deleteNote = (title) =>{
      notesDispatch({type:'DELETE_NOTE', title});
    }

    return (
        <Fragment>
            <NoteList deleteNote={deleteNote} notes={notes}/>
            <AddNoteForm notesDispatch={notesDispatch}/>
        </Fragment>
    )
}

export default NotesApp;