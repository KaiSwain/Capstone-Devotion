import { useEffect, useState } from "react"
import { GetAllVerses, GetThemedVerses } from "../services.jsx/InspirationService"





export const InspirationForm = ({setSharedRandomVerse}) => {
const [allVerses, setAllVerses] = useState([])
const [isVerse, setIsVerse ] = useState(false)
const [themedObjects, setThemedObjects] = useState([])
const [ randomVerse, setRandomVerse] = useState({})

useEffect(() => {
    GetAllVerses().then(arr => 
        setAllVerses(arr)
    )
}, [InspirationForm])




const handleTheme = (theme) => {
    if(theme == 0) {
        setThemedObjects(allVerses)
    } else {

        GetThemedVerses(theme).then(arr => setThemedObjects(arr))
    }
}

const handleGive = () => {
   const randomVerse = themedObjects[Math.floor(Math.random() * themedObjects.length)]
   setRandomVerse(randomVerse)
   setSharedRandomVerse(randomVerse)
}


return <div className="inspo-form"> Theme: 
    <select onChange={(event) => handleTheme(encodeURIComponent(event.target.value))}>
        
        <option value="0" >Random</option>
        {allVerses.map(verse => <option value={verse.theme} key={verse.id}> {verse.theme}</option>)}
    </select>
<button onClick={()=> handleGive()}>Give</button>
<div>{randomVerse.verse}</div>
</div>

}