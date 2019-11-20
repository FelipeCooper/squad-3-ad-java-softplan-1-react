import React, { useState, useEffect } from 'react';
import api from '../../service/api'
import TableError from '../../components/TableError'
import Search from "../../components/Search"
export default function Panel() {
    const [data, setData] = useState([])
    

    useEffect(() => {
        function fetchData() {
            api('/v1/error/aggregates').then(response => {
                setData((response.data.content));
            })
        }
        fetchData()
    }, [])
    return (
        <>
            <Search functionData={setData}/>
            {TableError(data)}
        </>
    )
}