import { useEffect, useState } from "react"
import { GetAllDevotions } from "../services.jsx/DevotionalService"
import './AllDevotions.css'



export const AllDevotions = () => {
const [allDevotions, setAllDevotions] = useState([])


        useEffect(() => {

            GetAllDevotions().then(arr => setAllDevotions(arr))

        }, [])







    return <div className='all-devotions'>
        {allDevotions.map(d => <div  className="d-title" key={d.id}> {d.title} <span className="d-theme">{d.theme}</span>
        <div className="d-body">{d.body}</div></div>)}
    </div>
}