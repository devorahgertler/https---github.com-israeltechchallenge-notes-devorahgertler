const Note = ({ note }) => {
    return (
        < div className="all-recorded-notes" >
            <div className='recorded-note'>
                <p>{note.note}</p>
                <p>{note.created}</p>
            </div>
        </div >

    )
}

export default Note;