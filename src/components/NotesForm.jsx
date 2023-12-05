import React, { useState } from 'react';

export const NotesForm = ({ addNote }) => {
    const [note, setNote] = useState('')
    let [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note === "") {
            alert('This is a required field');
            return null
        } else {
            addNote(note, title);
            setNote('');
            setTitle('');
        }

    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} value={title} ></input>
            <textarea placeholder='Your note...' onChange={(e) => { setNote(e.target.value) }} value={note} className='text-area'></textarea>
            <button type='submit' className='button'>Add Note</button>
        </form >
    );
}
