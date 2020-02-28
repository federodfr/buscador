import React,{useEffect, useState} from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true),
          [data, setData]       = useState([]);
    
    const fetchData= async () => {
        const response = await fetch(url),
            data = await response.json();
            setData(data)
            setLoading(false)
    }
    
    useEffect(()=> {
        fetchData()
    }, [])

    return { loading, data }
}

export default useFetch;