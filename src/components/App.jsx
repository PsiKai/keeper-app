import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function makeNote(note) {
    setItems((prevValue) => {
      return [...prevValue, note]
    })
  }

  function deleteNote(id) {
    setItems((prevValue) => {
      return prevValue.filter((note, index) => {
        return id !== index;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea list={makeNote}/>
      {items.map((item, index) => {
        return <Note 
                  key={index} 
                  id={index} 
                  title={item.title} 
                  content={item.content} 
                  delete={deleteNote}

                  />
      })}
      <Footer />
    </div>
  );
}

export default App;
