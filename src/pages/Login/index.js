import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    async function Autentication(){
        console.log(email+" "+ password)
    }
    return (
        <>
            <input type="text" placeholder="Email" onChange={(ev)=>setEmail(ev.target.value)} /><br />
            <input type="password" placeholder="Senha" onChange={(ev) => setPassword(ev.target.value)}/><br />
            <Button text="Logar" onClick={Autentication} />
        </>
    )
}


