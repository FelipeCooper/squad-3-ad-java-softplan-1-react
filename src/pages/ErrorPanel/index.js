import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SearchOne } from '../../service/SearchService';

const ErrorPanel = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let search = await SearchOne(id);
            setData((search))
            console.log(search)
        }
        fetchData()
    }, [])

    return (
        <>  
        {data.map(err=>{
            return(
                <h1>{err.title}</h1>
            )
        })}

        </>
    )
}

export default ErrorPanel;