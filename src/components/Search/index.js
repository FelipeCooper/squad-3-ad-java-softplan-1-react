import React, { useState, useEffect } from 'react'
import Button from '../Button';
import {SearchService} from '../../service/SearchService'

export default function Search({ functionData: functionData }) {
    const [options, setOptions] = useState({
        text: '',
        environment: '',
        searchParam: 'title',
        order: ''
    })
    async function submitSearch() {
        let data = await SearchService(options)
        functionData(data);
    }
    return (
        <>
            <input type="text" onChange={ev => { setOptions({ ...options, text: ev.target.value.toUpperCase() }) }} />
            <select onChange={ev => { setOptions({ ...options, environment: ev.target.value }) }}>
                <option defaultValue disabled hidden>Selecione o ambiente</option>
                <option value="PRODUCTION">Produção</option>
                <option value="HOMOLOGATION">Homologação</option>
                <option value="DEVELOPMENT">Desenvolvimento</option>
            </select>
            <select onChange={ev => { setOptions({ ...options, order: ev.target.value }) }}>
                <option disabled selected hidden>Ordenador por</option>
                <option value="level">Level</option>
                <option value="events">Frequência</option>
            </select>
            <select onChange={ev => { setOptions({ ...options, searchParam: ev.target.value }) }}>
                <option selected value="title">Titulo</option>
                <option value="level">Level</option>
                <option value="origin">Origem</option>
            </select>
            <Button text="Buscar" onClick={ev => { submitSearch() }} />
        </>
    )
}