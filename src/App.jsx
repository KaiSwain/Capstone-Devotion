import { useState } from "react"
import { DevotionalForm } from "./components/DevotionalForm"
import { InspirationForm } from "./components/InspirationForm"


export const App  = () => {
 const [sharedRandomVerse, setSharedRandomVerse] = useState({})
const [devotion, setDevotion] = useState({
    id: "",
    title: "",
    location: "",
    theme: "",
    body: "",
  });

 return <>
 <div className="all-views">

 <DevotionalForm className="devotional-view" devotion={devotion} setDevotion={setDevotion} sharedRandomVerse={sharedRandomVerse}/>
 <InspirationForm className="Inspiration-view" devotion={devotion} setDevotion={setDevotion} sharedRandomVerse={sharedRandomVerse} setSharedRandomVerse={setSharedRandomVerse}/>
 </div>
 </>
}
  
