import { useEffect, useState } from "react"
import { GetAllVerses, GetThemedVerses } from "../services.jsx/InspirationService"





export const InspirationForm = ({setSharedRandomVerse, setDevotion,devotion}) => {
const [allVerses, setAllVerses] = useState([])
const [ isVerse, setIsVerse ] = useState(false)
const [themedObjects, setThemedObjects] = useState([allVerses])
const [ randomVerse, setRandomVerse] = useState({})

useEffect(() => {
    GetAllVerses().then(arr => 
        setAllVerses(arr))

        GetAllVerses().then(arr => setThemedObjects(arr))
        console.log("got all verses", allVerses)
        
        
}, [])






const handleTheme = (theme) => {
    if(theme == 0) {
        setThemedObjects(allVerses)
        console.log("Theme == 0", themedObjects)
    } else {
        console.log("Theme != 0", themedObjects)
        GetThemedVerses(theme).then(arr => setThemedObjects(arr))
    }
}

const handleGive = () => {
   const randomVerse = themedObjects[Math.floor(Math.random() * themedObjects.length)]
   setRandomVerse(randomVerse)
   setSharedRandomVerse(randomVerse)
   console.log("Random Verse", randomVerse)
   devotion.theme = randomVerse.theme
   devotion.location = randomVerse.location
}


return <div className="inspo-form"> Theme: 
    <select defaultValue="0" onChange={(event) => handleTheme(encodeURIComponent(event.target.value))}>
        
        <option value="0" >Random</option>
        {allVerses.map(verse => < option value={verse.theme} key={verse.id}> {verse.theme}</option>)}
    </select>
<button onClick={()=> handleGive()}>Give</button>
<div>{randomVerse?.verse}</div>
</div>

}