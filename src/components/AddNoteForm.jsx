import React, {Fragment, useState, useContext} from 'react';
import NotesContext from '../contexts/notes-context';

/**
* @author VAK
* @function AddNoteForm
**/

const AddNoteForm = () => {

    const {notesDispatch} = useContext(NotesContext);

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
        notesDispatch({type:'ADD_NOTE', note});
        setTitle('');
        setDescreption('');  
    }
    return (
        <Fragment>
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

export default AddNoteForm;