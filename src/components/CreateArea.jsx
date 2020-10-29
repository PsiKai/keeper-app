import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  })
  const [expand, setExpand] = useState(false);

  function writeNote(e) {
    const {name, value} = e.target;
    setInputText((prevText) => {
      return {...prevText, [name]: value}
    })
  }

  function textArea() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={(e) => {
        props.list(inputText)
        setInputText({title: "", content: ""})
        e.preventDefault();
      }}>
        {expand && <input 
          onChange={writeNote} 
          name="title" 
          placeholder="Title" 
          value={inputText.title}
        />}
        <textarea 
          onClick={textArea}
          onChange={writeNote} 
          name="content" 
          placeholder="Take a note..." 
          rows={expand ? "3" : "1"} 
          value={inputText.content}
        />
        <Zoom in={expand ? true : false}>
          <Fab type="submit"><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
