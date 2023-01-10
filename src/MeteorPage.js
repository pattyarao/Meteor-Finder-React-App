import { useEffect, useMemo, useState } from "react"
import MeteorContainer from "./MeteorContainer"
import { MeteorContext } from "./MeteorContext"
import MeteorList from "./MeteorList"
import useFetch from "./useFetch"

const MeteorPage = () => {
    const {data: meteor, isLoading, error} = useFetch("http://localhost:8000/meteors")
    const [meteors, setMeteors] = useState(null)
    const [noMeteor, setNoMeteor] = useState(false)
    const [userSearch , setUserSearch] = useState(null)

    const providerValue = useMemo(() => ({meteors, setMeteors}), [meteors, setMeteors])

    useEffect(() => {
        setMeteors(meteor)
    }, [meteor])

    const checkMeteor = () => {
        setMeteors(meteor.filter((element) => userSearch === element.year.substring(0,4)))
        console.log(noMeteor)
    }

    useEffect(() => {
        if(meteors !== null) {
            if(meteors.length === 0) {
                setNoMeteor(true)
            } else {
                setNoMeteor(false)
            }
        }
    }, [meteors])



    return(
        <div>
            <MeteorContext.Provider value={providerValue}>
                <MeteorContainer setUserSearch={setUserSearch} checkMeteor={checkMeteor}/>
                {meteors && <MeteorList />}
                {noMeteor && <div>No meteor found</div>}
                {isLoading && <div>loading meteors now</div>}
                {error && <div>Could not load meteor data</div>}
            </MeteorContext.Provider>
        </div>
    )
}

export default MeteorPage