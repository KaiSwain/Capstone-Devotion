import { useEffect, useState } from "react";
import {
  GetAllVerses,
  GetThemedVerses,
} from "../services.jsx/InspirationService";
import { GetAllThemes } from "../services.jsx/ThemeService";
import "./InspirationForm.css";

export const InspirationForm = ({
  setSharedRandomVerse,
  setDevotion,
  devotion,
}) => {
  const [allVerses, setAllVerses] = useState([]);
  const [isVerse, setIsVerse] = useState(false);
  const [themedObjects, setThemedObjects] = useState([allVerses]);
  const [randomVerse, setRandomVerse] = useState({});
  const [allThemes, setAllThemes] = useState([]);

  useEffect(() => {
    GetAllVerses().then((arr) => setAllVerses(arr));

    GetAllVerses().then((arr) => setThemedObjects(arr));
    console.log("got all verses", allVerses);

    GetAllThemes().then((arr) => setAllThemes(arr));
  }, []);

  const handleTheme = (theme) => {
    if (theme == 0) {
      setThemedObjects(allVerses);
      console.log("Theme == 0", themedObjects);
    } else {
      console.log("Theme != 0", themedObjects);
      GetThemedVerses(theme).then((arr) => setThemedObjects(arr));
    }
  };

  const handleGive = () => {
    const randomVerse =
      themedObjects[Math.floor(Math.random() * themedObjects.length)];
    setRandomVerse(randomVerse);
    setSharedRandomVerse(randomVerse);
    console.log("Random Verse", randomVerse);
    devotion.theme = randomVerse.theme.name;
    devotion.location = randomVerse.location;
  };

  return (
    <div className="inspo-form">
      {" "}
      <h1 className="theme">Theme?</h1>
      <select
        className="theme-select"
        defaultValue="0"
        onChange={(event) =>
          handleTheme(encodeURIComponent(event.target.value))
        }
      >
        <option value="0">Random</option>
        {allThemes.map((t) => (
          <option value={t.id} key={t.id}>
            {" "}
            {t.name}
          </option>
        ))}
      </select>
      <div className="random-verse">{randomVerse?.verse}</div>
      <button className="give-btn" onClick={() => handleGive()}>
        Give
      </button>
    </div>
  );
};
