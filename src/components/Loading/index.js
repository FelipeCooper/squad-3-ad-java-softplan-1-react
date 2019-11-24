import { BallBeat } from 'react-pure-loaders';
import React from "react"
export default function Loader({ loading: loading }) {
    const color = "#000"
    return (
        <div className='container'>
            <div className='box' style={{ border:'none', textAlign: "center",bottom:'0' }}>
                <BallBeat loading={loading} color={color}></BallBeat>
            </div>
        </div>

    )
}