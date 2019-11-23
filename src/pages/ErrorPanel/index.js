import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SearchOne } from '../../service/SearchService';

const ErrorPanel = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {setData((await SearchOne(id)))}
        fetchData()
    }, [])

    return (
        <>  
        {data.map(err=>{
            return(<>
                <h1>{err.title}</h1><br></br>
                <h1>{err.origin}</h1>
                </>
            )
        })}

        </>
    )
}

export default ErrorPanel;