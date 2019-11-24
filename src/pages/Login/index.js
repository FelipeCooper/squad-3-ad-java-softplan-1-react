import React, { useState } from 'react'
import Button from '../../components/Button'
import axios from 'axios'
import history from '../../routes/History'
import navBar from '../../components/NavBar'
import { login } from '../../service/Auth'
import { Form, Icon, Input, Checkbox } from 'antd';

export default function Login({ form: getFieldDecorator }) {
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
        <div className="container">
            <navBar></navBar>
            <div className='box' style={{ textAlign: 'center' }}>

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
                        <a className="login-form-forgot" href="">Esqueci minha senha</a>
                        <Button onClick={ev => { Autentication() }} text="Logar" /><br />
                    </Form.Item>
                </Form>



            </div>
            {logged ? history.push('/') : null}
        </div>
    )
}


