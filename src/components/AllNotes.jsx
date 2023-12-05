import React, { useState, useEffect } from 'react';
import { NotesForm } from './NotesForm';
import Note from './Note';
import { v4 as uuidv4 } from 'uuid';
import { NoteModal } from './Modal';

uuidv4();

export const AllNotes = () => {
    const [notes, setNotes] = useState([])

    const month = new Date().toLocaleString('default', { month: 'short' });
    const date = new Date().getDate();
    const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
    const addNote = (note, title) => {
        setNotes([...notes, { title: title, note: note, created: (month + ' ' + date + ", " + time), id: uuidv4() }])
    }

    return (

        <div>
            <NotesForm addNote={addNote} />
            <div class='results'>
                {notes.map((note, id) => <Note note={note} key={id} notes={notes} />)}
            </div>
        </div>
    )
}