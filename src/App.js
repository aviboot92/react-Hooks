import React, {Fragment, useState, useEffect} from 'react';
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

const NotesDisplay = () => {
    const [notes,
        setNotes] = useState([]);
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
      setNotes([{title, descreption}, ...notes]);
      setTitle('');
      setDescreption('');
    }

    return (
        <Fragment>

            <Note notes={notes}/>

            <div className="inputGrabber">
              <h3>Add NOTE:</h3>
              <form onSubmit={createNote}>
                <label for='name'>Title:
                </label>
                <input type="text" value={title} id='name' name='title' placeholder='Add TITLE' onChange={onInputChange}/>
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
                    <br />
                    <button type='submit'>ADD NOTE</button>
                </form>
            </div>
        </Fragment>
    )
}

const Note = (props) => {
  console.log('I am Notes Array', props.notes);

    return (
        <Fragment>
            <h3>NOTES:</h3>
        </Fragment>
    )
}

export default App;
