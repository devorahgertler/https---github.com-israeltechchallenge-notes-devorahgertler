import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Note = ({ note, notes }) => {


    const [notesBoard, setNotesBoard] = useState(...notes);
    const deleteNote = (id) => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            const updatedNotesBoard = notes.filter(note => note.id !== id)
            setNotesBoard([...updatedNotesBoard]);
        }
    }


    return (
        < div className="all-recorded-notes" >
            <div className='recorded-note'>
                <p>{note.note}</p>
                <p>{note.created}</p>
                <FontAwesomeIcon icon={faTrash} className="delete" onClick={() => { deleteNote(note.id) }} />
            </div>
        </div >

    )
}

export default Note;