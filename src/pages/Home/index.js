import React, { useState, useEffect} from 'react';
import history from '../../routes/History'
import TableError from '../../components/TableError';
import Search from "../../components/Search";
import {SearchService} from "../../service/SearchService";
export default function Home() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState(null)
    useEffect(() => {
        async function fetchData() {
            let response = await SearchService();
            setData((response));
        }
        fetchData()
    }, [])
    if(search != null){
        let path = "/error/"+search;
        history.push(path)
    }
return (
    <div >
        <Search functionData={setData} />
        {TableError(data, setSearch)}
    </div>
)
}