import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import '../components/styles.css';

function App() {

  const [notes,setNotes] = useState([]);

  function addNote(noteData){
    setNotes((prevNotes)=>{
      return [...prevNotes,noteData];
    })
  }

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((note,index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note,index)=>{
        return <Note key={index} id={index} title={note.title} content={note.content} onChecked={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
