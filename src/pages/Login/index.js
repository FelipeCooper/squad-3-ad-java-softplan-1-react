import React, { useState } from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import history from '../../routes/History'
import { login } from '../../service/Auth'
import Form from 'react-bootstrap/Form'
export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [logged, setLogged] = useState(false)
    async function Autentication() {
        try {
            let request = await axios({
                url: '/login',
                method: 'post',
                baseURL: 'http://localhost:8080',
                data: {
                    email: email,
                    password: password,
                }
            })
            let token = await request.headers.authorization;
            login(token)
            console.log("aqui", logged)
            setLogged(true);
        } catch (error) {
            console.log(error)
            return (alert("Usuario ou senha Invalidos"))
        }
    }
    return (
            <div className='box'>
                <Form>
                    <h2 style={{textAlign:"center"}}>LOGIN</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control onChange={(ev) => setPassword(ev.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={Autentication} text={"Logar"} />
                </Form>
                {logged ? history.push('/'): null}
            </div>
    )
}


