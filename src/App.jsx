import { useState } from "react"
import { DevotionalForm } from "./components/DevotionalForm"
import { InspirationForm } from "./components/InspirationForm"


export const App  = () => {
 const [sharedRandomVerse, setSharedRandomVerse] = useState({})

 return <>
 <DevotionalForm sharedRandomVerse={sharedRandomVerse}/>
 <InspirationForm setSharedRandomVerse={setSharedRandomVerse}/>
 </>
}
  
