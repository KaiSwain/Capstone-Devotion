import { useEffect, useState } from "react";
import {
  GetAllVerses,
  GetThemedVerses,
  PutFavoriteVerse,
} from "../services.jsx/InspirationService";
import { GetAllThemes } from "../services.jsx/ThemeService";
import "./InspirationForm.css";
import { GetUserByEmail } from "../services.jsx/UserService";

export const InspirationForm = ({
  setSharedRandomVerse,
  setDevotion,
  devotion,
  currentUser,
  setFavoriteVerse,
  setFavoriteVerseLocation,
}) => {
  const [allVerses, setAllVerses] = useState([]);

  const [themedObjects, setThemedObjects] = useState([allVerses]);
  const [randomVerse, setRandomVerse] = useState({ verse: false });
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

  const handleFavorite = () => {
    if (randomVerse.verse) {
      GetUserByEmail(currentUser.email).then;
      currentUser.verseId = randomVerse.id;
      currentUser.verse = randomVerse.verse;
      currentUser.verseLocation = randomVerse.location;
      PutFavoriteVerse(currentUser);
      setFavoriteVerse(currentUser.verse);
      setFavoriteVerseLocation(currentUser.verseLocation);
    }
  };

  return (
    <div className="inspo-form">
      {" "}
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
      <div
        style={{ display: randomVerse.verse !== false ? "flex" : "none" }}
        className="random-verse"
      >
        {randomVerse?.verse}
      </div>
      <div className="buttons">
        <button className="give-btn" onClick={() => handleGive()}>
          Give
        </button>
        <button className="favorite-btn" onClick={() => handleFavorite()}>
          Favorite
        </button>
      </div>
    </div>
  );
};
