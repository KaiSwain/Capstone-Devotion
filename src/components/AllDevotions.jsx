import { useEffect, useState } from "react";
import {
  GetAllDevotions,
  GetUsersDevotions,
} from "../services.jsx/DevotionalService";
import "./AllDevotions.css";
import { useNavigate } from "react-router-dom";

export const AllDevotions = ({
  currentUser,
  devotion,
  setDevotion,
  setDetector,
  detector,
}) => {
  const [allDevotions, setAllDevotions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    GetUsersDevotions(currentUser.id).then((arr) => setAllDevotions(arr.reverse()));
    console.log("GOT ALL DEVOTIONS");
  }, [allDevotions.length, currentUser]);

  const handleEdit = (d) => {
    setDetector(true);
    setDevotion({
      id: d.id,
      title: d.title,
      location: d.location,
      theme: d.theme,
      body: d.body,
      userId: currentUser.id,
      date: d.date
    });
    navigate("/create");
    console.log("clicked", devotion);
  };

  const handleCreate = () => {
    setDetector(false);
    setDevotion({
      id: "",
      title: "",
      location: "",
      theme: "",
      body: "",
      userId: "",
    });
    navigate("/create");
  };

  return (
      <div className="all-devotions">
      <button className="create-btn d-card" onClick={() => handleCreate()}>
        <span>+</span>
      </button>
      {allDevotions.map((d) => (
          <div className="d-card" onClick={() => handleEdit(d)} key={d.id}>
          <div className="d-title">{d.title}</div>{" "}
          <div>
          <span className="d-theme">{d.location}</span>
        </div>
          <div
            className="d-body"
            style={{ display: d.body !== "" ? "flex" : "none" }}
            >
            {d.body}
          </div>
          <div className="theme-verse">

          <span className="d-theme">{d.theme}</span>
              <div className="d-date">{d.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
