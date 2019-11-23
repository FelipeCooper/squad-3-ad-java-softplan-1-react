import React, { useState, useEffect} from 'react';
import {Redirect, useHistory,useLocation} from 'react-router-dom';
import TableError from '../../components/TableError';
import Search from "../../components/Search";
import {SearchService} from "../../service/SearchService";
export default function Panel() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState(null)
    const history = useHistory();
    useEffect(() => {
        async function fetchData() {
            let response = await SearchService();
            setData((response));
        }
        fetchData()
    }, [])
    if(search != null){
        let path = "/error/"+search;
        return (<Redirect to={{pathname: path, location:history }}/>)
    }
return (
    <div className='box' style={{width:'60%'}}>
        <Search functionData={setData} />
        {TableError(data, setSearch)}
    </div>
)
}