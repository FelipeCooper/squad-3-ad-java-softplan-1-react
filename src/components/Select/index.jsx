import React from 'react'
import { Select } from 'antd'

export default function Selecter({ options: options, ...rest}) {
    const {Option} = Select;
    return (
        <Select {...rest}>
            {options.map(opt => {
                return (
                    <Option key={opt.key} value={opt.key}> {opt.value}</Option>
                )
            })}
        </Select>
    )
}
