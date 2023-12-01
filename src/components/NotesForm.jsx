import React, { useState } from 'react';

export const NotesForm = ({ addNote }) => {
    const [note, setNote] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note === "") { return null };
        addNote(note);
        setNote('');
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <textarea placeholder='Your note...' onChange={(e) => { setNote(e.target.value) }} value={note} className='text-area'></textarea>
            <button type='submit' className='button'>Add Note</button>
        </form>
    );
}
