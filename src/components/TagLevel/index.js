import React from 'react'
import { Button } from 'antd'

function Tag({ level: level }) {
    const cor = () => {
        switch (level) {
            case 'ERROR':
                return "red"
                break;
            case 'WARNING':
                return "orange"
                break;
            case 'DEBUG':
                return "yellow"
                break;
            default:
                break;
        }
    }
    return (
        <>
<Button style={{backgroundColor:cor()}}><b>{level}</b></Button>
        </>
    )
}

export default Tag
