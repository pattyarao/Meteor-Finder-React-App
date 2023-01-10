import { useContext } from "react"
import { MeteorContext } from "./MeteorContext"

const MeteorList = () => {
    const {meteors, setMeteors} = useContext(MeteorContext)
    
    const searchMeteor = (meteor) => {
        const search = "https://www.google.com/search?q=" + meteor.name + " meteorite"
        window.open(search, "_blank", "noreferrer")
    }

    const searchLocation = (meteor) => {
        const loc = meteor.reclat + ',' + meteor.reclong
        const search = 'https://www.google.com/maps/place/'+loc
        window.open(search, '_blank', 'noreferrer')
    }

    return(
        <div>
            {
                meteors.map(meteor => (
                    
                    <div key={meteor.id} class="meteor-details">
                        <div class="meteor-name">
                            {meteor.name}
                        </div> 

                        <div class="meteor-year">
                            {meteor.year.substring(0,4)}
                        </div>
                        
                        <div class="buttons">
                            <button class = "search-results" onClick={() => searchMeteor(meteor)}>Search</button>
                            <button class = "search-loc" onClick={() => searchLocation(meteor)}>Search Location</button>
                        </div>
    
                    </div>
                    
                ))
            }
        </div>
    )
}

export default MeteorList