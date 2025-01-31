import { useState } from "react";
import { DeleteDevotion, PostDevotion, PutDevotion } from "../services.jsx/DevotionalService";
import './DevotionalForm.css'
import { useNavigate } from "react-router-dom";

export const DevotionalForm = ({sharedRandomVerse, devotion, setDevotion, currentUser, setDetector, detector}) => {
  
 const navigate = useNavigate()

  const handleSave = (event) => {
     //prevents the automatic refresh
    event.preventDefault()

    if(detector){
        PutDevotion(devotion)
        navigate("/home")
        console.log("PUTTTED")
    } else {
        
        console.log("POSTING", devotion);
        devotion.userId = currentUser.id
        devotion.date = new Date("2023-02-15T14:30:00Z").toISOString().split("T")[0]
        PostDevotion(devotion);
        navigate("/home")
    }
};

    const handleCancel = (event) => {
        event.preventDefault()
        navigate("/home")
    }
    
    const handleDelete = (devotion) => {
        event.preventDefault()
        if(detector){
            DeleteDevotion(devotion)
        }

        navigate("/home")
    }





    

  return (
    <div className="devo-form">
      <form>
        <input
          name="devotion_title"
          rows="1"
          cols="10"
          placeholder="Title"
          defaultValue={devotion.title}
          onChange={(event) =>
            setDevotion({ ...devotion, title: event.target.value })
          }
        ></input>
        <input
          name="devotion_theme"
          rows="1"
          cols="10"
          placeholder="Theme"
          value={devotion.theme}
          onChange={(event) =>
            setDevotion({ ...devotion, theme: event.target.value })
          }
        ></input>
        
        <input
          name="devotion_location"
          rows="1"
          cols="10"
          placeholder="location"
          value={devotion.location}
          onChange={(event) =>
            setDevotion({ ...devotion, location: event.target.value })
          }
        ></input>
        <textarea
          name="devotion_body"
          rows="11"
          cols="50"
          placeholder="Write your devotion here..."
          defaultValue={devotion.body}
          onChange={(event) =>
            setDevotion({ ...devotion, body: event.target.value })
          }
        ></textarea>

        <div className="btn">

        <button className="devotion-save-btn" onClick={ 
            
            handleSave}>
          Save
        </button>
        <button className="devotion-cancel-btn" onClick={handleCancel}>
          cancel
        </button>
        <button className="devotion-delete-btn" onClick={() => handleDelete(devotion)}>
          delete
        </button>
                </div>
      </form>
    </div>
  );
};
