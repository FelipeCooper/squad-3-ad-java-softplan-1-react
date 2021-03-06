import React, { useState, useEffect } from 'react';
import history from '../../routes/History'
import TableError from '../../components/TableError';
import Search from "../../components/Search";
import { SearchService } from "../../service/SearchService";
export default function Home() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState(null)
    const [page, setPage] = useState(0)
    const [options, setOptions] = useState({
        text: '',
        environment: '',
        searchParam: '',
        order: ''
    })
    useEffect(()=>{
        submitSearch()
    },[page])
    async function submitSearch() {
        let data = await SearchService(options,page)
        setData(data);
    }
    useEffect(() => {
        async function fetchData() {
            await setData((await SearchService()));
        }
        fetchData()
    }, [])
    if (search != null) {
        let path = "/error/" + search.id +'/'+search.events;
        history.push(path)
    }
    return (
        <div className="container">
            <div>
                <Search functionData={setData} options={options} submit={submitSearch} setOptions={setOptions} />
                {data.length == 0 ? null : TableError(data, setSearch,setPage)}
            </div>
        </div>

    )
}