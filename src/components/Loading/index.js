import { BallBeat } from 'react-pure-loaders';
import React from "react"
export default function Loader({ loading: loading }) {
    const color = "#000"
    return (
        <div style={{width:"100%", textAlign:"center"}}>
            <BallBeat loading={loading} color={color}></BallBeat>
        </div>
    )
}