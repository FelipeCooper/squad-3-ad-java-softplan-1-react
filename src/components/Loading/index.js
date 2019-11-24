import { BallBeat } from 'react-pure-loaders';
import React from "react"
export default function Loader({ loading: loading }) {
    const color = "#000"
    return (
        <div className='container'>
            <div style={{marginTop:'18em'}}>
                <BallBeat loading={loading} color={color}></BallBeat>
            </div>
        </div>

    )
}