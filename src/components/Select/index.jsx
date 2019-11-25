import React from 'react'
import { Select } from 'antd'

export default function Select({ options: options, function: setData}) {
    const {Option} = Select;
    return (
        <Select onChange={(ev)=>{setData(ev.target.value)}}>
            {options.map(opt => {
                return (
                    <Option key={opt.key}>{opt.value}</Option>
                )
            })}
        </Select>
    )
}
