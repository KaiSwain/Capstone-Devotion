import { useEffect, useState } from "react";

import "./Views.css";
import { InspirationForm } from "../components/InspirationForm";
import { DevotionalForm } from "../components/DevotionalForm";
import { AllDevotions } from "../components/AllDevotions";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Profile } from "../components/Profile";
import { GetUserByEmail } from "../services.jsx/UserService";

export const Views = () => {
  const [sharedRandomVerse, setSharedRandomVerse] = useState({});
  const [devotion, setDevotion] = useState({
    id: "",
    title: "",
    location: "",
    theme: "",
    body: "",
    userId: "",
    date: false,
  });
  const [currentUser, setCurrentUser] = useState({});
  const [detector, setDetecter] = useState(null);
  const [favoriteVerse, setFavoriteVerse] = useState(currentUser.verse);
  const [favoriteVerseLocation, setFavoriteVerseLocation] = useState(
    currentUser.verseLocation
  );
  useEffect(() => {
    const localDevUser = localStorage.getItem("dev_user");
    const devUserObject = JSON.parse(localDevUser);

    setCurrentUser(devUserObject);
    console.log(currentUser, "HEY");
  }, []);

  useEffect(() => {
    setFavoriteVerse(currentUser.verse);
    setFavoriteVerseLocation(currentUser.verseLocation);
  }, [currentUser]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route
          index
          path="home"
          element={<>
            <div className="headers">
                  <h4 className="favorite-verse">{favoriteVerseLocation}</h4>
                  <h5>{favoriteVerse}</h5>
                </div>
            <AllDevotions
              setDetector={setDetecter}
              detector={detector}
              setDevotion={setDevotion}
              devotion={devotion}
              currentUser={currentUser}
              />
              </>
          }
        />
        <Route
          path="create"
          element={
            <>
              <div className="container">
                <div className="headers">
                  <h4 className="favorite-verse">{favoriteVerseLocation}</h4>
                  <h5>{favoriteVerse}</h5>
                </div>

                <div className="devo-inspo">
                  <InspirationForm
                    setFavoriteVerse={setFavoriteVerse}
                    setFavoriteVerseLocation={setFavoriteVerseLocation}
                    className="Inspiration-view"
                    devotion={devotion}
                    setDevotion={setDevotion}
                    sharedRandomVerse={sharedRandomVerse}
                    setSharedRandomVerse={setSharedRandomVerse}
                    currentUser={currentUser}
                  />
                  <DevotionalForm
                    setDetector={setDetecter}
                    detector={detector}
                    currentUser={currentUser}
                    className="devotional-view"
                    devotion={devotion}
                    setDevotion={setDevotion}
                    sharedRandomVerse={sharedRandomVerse}
                  />
                </div>
              </div>
            </>
          }
        />

        <Route path="profile" element={<Profile currentUser={currentUser} />} />
      </Route>
    </Routes>

    // <>
    //   <div className="container">
    //     <div className="devo-inspo">
    //       <InspirationForm
    //         className="Inspiration-view"
    //         devotion={devotion}
    //         setDevotion={setDevotion}
    //         sharedRandomVerse={sharedRandomVerse}
    //         setSharedRandomVerse={setSharedRandomVerse}
    //       />
    //       <DevotionalForm
    //         className="devotional-view"
    //         devotion={devotion}
    //         setDevotion={setDevotion}
    //         sharedRandomVerse={sharedRandomVerse}
    //       />
    //     </div>

    //   </div>
    // </>
  );
};
