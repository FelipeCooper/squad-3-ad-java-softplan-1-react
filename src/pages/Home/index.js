import React, { useState, useEffect } from 'react';
import history from '../../routes/History'
import TableError from '../../components/TableError';
import Search from "../../components/Search";
import { SearchService } from "../../service/SearchService";
import {Empty} from 'antd'
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
    if (search != null) {
        let path = "/error/" + search;
        history.push(path)
    }
    return (
        <div className="container">
            <div>
                <Search functionData={setData} />
                {data.length == 0 ? <Empty description="Nenhum rro encontrado"/>: TableError(data, setSearch)}
            </div>
        </div>

    )
}