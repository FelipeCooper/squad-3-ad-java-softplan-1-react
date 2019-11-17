import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import api from '../../service/api';
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    async function Autentication() {


        axios({
            url: '/oauth/token',
            method: 'post',
            proxy: "https://cors-anywhere.herokuapp.com/",
            baseURL: 'http://localhost:8080',
            headers: {
                'Authorization': 'Basic Y29kZW5hdGlvbjoxMjM=', 'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
                username: 'user23@useradm.com.br',
                password: '123'
            }
        }).then(result => {
            console.log(result)
        })/*
           let formData = new FormData();
           formData.append('grant_type', 'password');
           formData.append('username', 'user23@useradm.com.br');
           formData.append('password', '123');
        fetch('http://localhost:8080/oauth/token', {
            method: 'POST',
            headers: {
                'authorization': 'Basic Y29kZW5hdGlvbjoxMjM=',
            },
            body:formData
            
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson.access_token);
                return responseJson.access_token;
            })
            .catch(error => {
                console.error(error);
            });*/
        console.log(email + " " + password)
    }
    return (
        <>
            <input type="text" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)} /><br />
            <input type="password" placeholder="Senha" onChange={(ev) => setPassword(ev.target.value)} /><br />
            <Button text="Logar" onClick={Autentication} />
        </>
    )
}


