import React, { useState, useEffect } from 'react'
import Button from '../Button';
import api from '../../service/api'

export default function Search({functionData: functionData}) {
    const [options, setOptions] = useState({
        text: '',
        environment: "PRODUCTION",
        searchParam: 'title'
    })
    function submitSearch(){
        let url = '/v1/error/aggregates?'+
        "environment="+options.environment+
        "&"+options.searchParam+"="+options.text;

        console.log(options)
        api(url).then(response => {
            console.log(response)
            functionData(response.data.content);
        }).catch(err => console.log(err));
    }
    return (
        <>
            <input type="text" onChange={ev=>{setOptions({ ...options, text:ev.target.value.toUpperCase()})}} />
            <select onChange={ev=>{setOptions({ ...options, environment:ev.target.value})}}>
                <option selected disabled hidden>Selecione um opçao</option>
                <option value="PRODUCTION">Produção</option>
                <option value="HOMOLOGATION">Homologação</option>
                <option value="DEVELOPMENT">Desenvolvimento</option>
            </select>
            <select onChange={ev=>{setOptions({...options, searchParam:ev.target.value  })}}>
                <option selected disabled hidden>Buscar Por</option>
                <option value="level">Level</option>
                <option value="title">Titulo</option>
                <option value="origin">Origem</option>
            </select>
            <Button text="Buscar" onClick={ev=>{submitSearch()}}/>
        </>
    )
}