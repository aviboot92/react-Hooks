import React, {Fragment, useState, useEffect, useReducer} from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    My React HOOKS</h1>
            </header>
            <NotesDisplay/>
        </div>
    );
}

const notesReducer = (state, action) =>{
  switch(action.type){
    case "GET_NOTES":{
      return [...action.notes];
    }

    default:
      return state;
      break;
  }
}

const NotesDisplay = () => {
    const [notes,
        notesDispatch] = useReducer(notesReducer ,[]);

    useEffect(()=>{
      const notes = JSON.parse(localStorage.getItem('notes'));
      // localStorage.removeItem('notes');
      console.log('I am notes from local storage', notes);
      const notesArr = !!notes ? notes : [];
      notesDispatch({type: "GET_NOTES", notes: notesArr});
      // setNotes(notesArr);
    },[])

    const [title,
        setTitle] = useState('');
    const [descreption,
        setDescreption] = useState('');

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'title':
                return setTitle(value);
                break;

            case 'descreption':
                return setDescreption(value);
                break;

            default:
                return null;
        }
    }

    const createNote = e => {
        e.preventDefault();
        const note = {
            title,
            descreption
        };
        const newNotesArray = [note, ...notes];
        // setNotes(newNotesArray);
        setTitle('');
        setDescreption('');
      console.log('I am notes from CreateMode before SetItem', newNotesArray);
        localStorage.setItem('notes', JSON.stringify(newNotesArray));
    }

    return (
        <Fragment>

            <Note notes={notes}/>

            <div className="inputGrabber">
                <h3>Add NOTE:</h3>
                <form onSubmit={createNote}>
                    <label for='name'>Title:
                    </label>
                    <input
                        type="text"
                        value={title}
                        id='name'
                        name='title'
                        placeholder='Add TITLE'
                        onChange={onInputChange}/>
                    <br/>
                    <label for='descreption'>Descreption:
                    </label>
                    <textarea
                        id='descreption'
                        name='descreption'
                        value={descreption}
                        onChange={onInputChange}
                        rows='4'
                        cols='50'
                        placeholder='Please add your descretion here'></textarea>
                    <br/>
                    <button type='submit'>ADD NOTE</button>
                </form>
            </div>
        </Fragment>
    )
}

const Note = (props) => {
    // console.log('I am Notes Array', props.notes);
    const {notes} = props;

    return (
        <Fragment>
            <h3>NOTES:</h3>
            {notes.length !== 0 && notes.map((note, i) => {
                return (
                    <Fragment>
                        <h4
                            style={{
                            display: "inline-block"
                        }}>Title:
                        </h4>
                        {note.title}
                        <br/>
                        <h4
                            style={{
                            display: "inline-block"
                        }}>Descreption:
                        </h4>
                        {note.descreption}
                        <hr/>
                    </Fragment>
                )
            })}
        </Fragment>
    )
}

export default App;
