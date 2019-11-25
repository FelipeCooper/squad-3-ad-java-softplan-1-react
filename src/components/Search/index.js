import React, { useState, useEffect } from 'react'
import Button from '../Button';
import { SearchService } from '../../service/SearchService'
import {Select} from 'antd'

export default function Search({ functionData: functionData }) {
    const {Option} = Select;
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
            <Select size='default' defaultValue="a1"  style={{ width: 200 }}>
                <Option key='1'>teste</Option>
             </Select>
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