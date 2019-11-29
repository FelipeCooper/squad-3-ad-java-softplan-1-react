import React, { useState } from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import history from '../../routes/History'
import { login } from '../../service/Auth'
import { Form, Icon, Input } from 'antd';
import api from '../../service/api'

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [logged, setLogged] = useState(false)
    async function Autentication() {
        try {
            let request = await api.post('/login',{
                email: email,
                password: password,
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
        <div className="container">
            <navBar></navBar>
            <div className='box' style={{ width:'300px', textAlign: 'center' }}>

                <h1>Login</h1>
                <Form onSubmit={(ev) => { Autentication() }} className="login-form">
                    <Form.Item>
                        <Input onChange={(ev) => { setEmail(ev.target.value) }}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item>
                        <Input onChange={(ev) => { setPassword(ev.target.value) }} prefix=
                            {<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={ev => { Autentication() }} text="Logar" /><br />
                        <a className="login-form-forgot" style={{color:'gray'}}>Esqueci minha senha</a><br/>
                    </Form.Item>
                </Form>



            </div>
            {logged ? history.push('/') : null}
        </div>
    )
}


