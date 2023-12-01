import React, { useState } from 'react';
import { NotesForm } from './NotesForm';
import Note from './Note';


export const AllNotes = () => {
    const [notes, setNotes] = useState([])
    const addNote = (note) => {
        setNotes([...notes, { note: note, created: (new Date().toLocaleString()) }])
    }

    return (
        <div>
            <NotesForm addNote={addNote} />
            {notes.map((note, index) => (<Note note={note} key={index} />))}
        </div>
    )
}