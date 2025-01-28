import { useState } from "react";
import { PostDevotion } from "../services.jsx/DevotionalService";
import './DevotionalForm.css'

export const DevotionalForm = ({sharedRandomVerse, devotion, setDevotion}) => {
  

  const handleSave = (event) => {
    event.preventDefault(); //prevents the automatic refresh

    console.log("Handle Save", devotion);

    PostDevotion(devotion);
  };

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
        <button className="devotion-save-btn" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};
