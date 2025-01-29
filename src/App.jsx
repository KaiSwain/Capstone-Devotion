import { useState } from "react";
import { DevotionalForm } from "./components/DevotionalForm";
import { InspirationForm } from "./components/InspirationForm";
import { AllDevotions } from "./components/AllDevotions";
import "./App.css";

export const App = () => {
  const [sharedRandomVerse, setSharedRandomVerse] = useState({});
  const [devotion, setDevotion] = useState({
    id: "",
    title: "",
    location: "",
    theme: "",
    body: "",
  });

  return (
    <>
      <div className="container">
        <div className="devo-inspo">
          <InspirationForm
            className="Inspiration-view"
            devotion={devotion}
            setDevotion={setDevotion}
            sharedRandomVerse={sharedRandomVerse}
            setSharedRandomVerse={setSharedRandomVerse}
          />
          <DevotionalForm
            className="devotional-view"
            devotion={devotion}
            setDevotion={setDevotion}
            sharedRandomVerse={sharedRandomVerse}
          />
        </div>
        <AllDevotions />
      </div>
    </>
  );
};
