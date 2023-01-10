import { useContext, useState } from "react"
import { MeteorContext } from "./MeteorContext"

const MeteorContainer = ( {setUserSearch, checkMeteor} ) => {
    const {meteors, setMeteors} = useContext(MeteorContext)
    const [search,  setSearch] = useState(null)


    return(
        <div class="container">
           <div><span class="meteor-heading">METEOR FINDER</span></div>
            <div class="search">
                <input class="text-field" onChange={(e) => setUserSearch(e.target.value)} placeholder = "Search meteor by year . . ."></input>
                <button class="search-meteor" onClick={checkMeteor}>&#128269;</button>
            </div>
        </div>
    )
}

export default MeteorContainer