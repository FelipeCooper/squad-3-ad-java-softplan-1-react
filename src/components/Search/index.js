import React, { useState, useEffect } from 'react'
import Button from '../Button';
import { SearchService } from '../../service/SearchService'
import Select from '../Select'
import {Input} from 'antd'

export default function SearchModel({ functionData: functionData, options:options, submit: submitSearch, setOptions:setOptions }) {
    const { Search } = Input;
    const environment = [
        { key: 'PRODUCTION', value: 'Produção' },
        { key: 'HOMOLOGATION', value: 'Homologação' },
        { key: 'DEVELOPMENT', value: 'Desenvolvimento' }
    ]
    const order = [
        { key: 'level', value: 'Level' },
        { key: 'events', value: 'Eventos' }
    ]
    const searchParam = [
        { key: 'level', value: 'Level' },
        { key: 'origin', value: 'Origem' },
        { key: 'title', value: 'Titulo' }
    ]

    return (
        <>
            <Select defaultValue="Ambiente " style={{ width: 200 }} options={environment}
                onChange={ev => { setOptions({ ...options, environment: ev }) }} />
            <Select defaultValue="Ordenado por" style={{ width: 200 }} options={order}
                onChange={ev => { setOptions({ ...options, order: ev }) }} />
            <Select defaultValue="Buscar por" style={{ width: 200 }} options={searchParam}
                onChange={ev => { setOptions({ ...options, searchParam: ev }) }} />
            <Search
                placeholder="PESQUISAR"
                onSearch={ev => { submitSearch() }}
                onChange={ev => { setOptions({ ...options, text: ev.target.value.toUpperCase() }) }}
                style={{ width: 250 }}
            />
        </>
    )
}