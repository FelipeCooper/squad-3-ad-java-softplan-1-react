import React,{useState,useEffect} from 'react'
import Logo from '../../assets/images/logo.png'
import { PageHeader, Popover } from 'antd';
import {getToken } from '../../service/Auth';
import { timeout } from 'q';
export default function Header() {
    const [logged, setLogged] = useState(getToken())
    useEffect(()=>{
        setInterval(()=>{
            setLogged(getToken())
        },5000)
    },[])

    const option = {
        width: '100%',
        top: '0',
        paddingTop: '0px',
        backgroundColor: 'silver',
        border: '1px solid rgb(20, 20, 20)',
        zIndex: '2',
        height: '40px',
        overflow: 'hidden'
    }
    return (
        <div>
            <PageHeader style={option}>
                <img style={{ float: 'left' }} src={Logo} width={40} alt="Logotipo da Codenation" />
                {logged != null ? 
                <b style={{ float: "right" }}>
                    Bem vindo Usuario, esse é
                    <Popover style={{ float: 'right' }} placement='bottomRight' content={logged} arrowPointAtCenter >
                        <a style={{ color: 'red' }}> seu Token</a>
                    </Popover>
                </b>: null}

            </PageHeader>
        </div>
    )
}
