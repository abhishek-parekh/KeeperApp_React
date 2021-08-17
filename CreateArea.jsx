import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded,setIsExpanded]=useState(false);

    const [note,setNote]= useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const {name,value}=event.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            };
        });
    };

    function submitNote(event){
        props.onAdd(note);
        setNote({
            content: "",
            title: ""
            
        });
        event.preventDefault();
    }

    function expand(){
        setIsExpanded(true)
    }

  return (
    <div className="create-note">
      <form>
        {isExpanded && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />}
        
        <textarea onClick={expand} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3:1} />
        <Zoom in={isExpanded}>
            <button onClick={submitNote}><AddIcon /></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
