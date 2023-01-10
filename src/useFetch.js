import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortConst = new AbortController();
        fetch(url, { signal: abortConst.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data')
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(e => {
                if (e.name === 'AbortError') {
                    console.log("fetch aborted")
                } else {
                    setIsLoading(false)
                    setError(e.message)
                }
            })

        return () => {
            abortConst.abort()
        }
    }, [url])

    return { data, isLoading, error }
}


export default useFetch