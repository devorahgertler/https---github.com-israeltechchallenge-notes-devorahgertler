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
                <p className={note.title ? 'note-title' : 'no-title'}>{note.title}</p>
                <p className='note-text' required>{note.note}</p>
                <p className='note-date'>{note.created}</p>
                <FontAwesomeIcon icon={faTrash} className="delete" onClick={() => { deleteNote(note.id) }} />
            </div>
        </div >

    )
}

export default Note;