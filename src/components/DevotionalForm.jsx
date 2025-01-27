import { useState } from "react";
import { PostDevotion } from "../services.jsx/DevotionalService";

export const DevotionalForm = () => {
  const [devotion, setDevotion] = useState({
    id: "",
    title: "",
    verse: "",
    chapter: "",
    body: "",
  });

  const handleSave = (event) => {
    event.preventDefault(); //prevents the automatic refresh

    console.log("Handle Save",devotion);

    PostDevotion(devotion);
  };

  return (
    <div className="devo-form">
      <form>
        <textarea
          name="devotion_title"
          rows="1"
          cols="10"
          placeholder="Title"
          defaultValue={devotion.title}
          onChange={(event) => setDevotion({ ...devotion, title: event.target.value})}
        ></textarea>
        <textarea
          name="devotion_chapter"
          rows="1"
          cols="10"
          placeholder="Chapter"
          defaultValue={devotion.chapter}
          onChange={(event) => setDevotion({ ...devotion, chapter: event.target.value})}
        ></textarea>
        <textarea
          name="devotion_verse"
          rows="1"
          cols="10"
          placeholder="Verse"
          defaultValue={devotion.verse}
          onChange={(event) => setDevotion({ ...devotion, verse: event.target.value})}
        ></textarea>
        <textarea
          name="devotion_body"
          rows="10"
          cols="50"
          placeholder="Write your devotion here..."
          defaultValue={devotion.body}
          onChange={(event) => setDevotion({ ...devotion, body: event.target.value})}
        ></textarea>
        <button className="devotion-save-btn" onClick={handleSave}> Save </button>
      </form>
    </div>
  );
};
