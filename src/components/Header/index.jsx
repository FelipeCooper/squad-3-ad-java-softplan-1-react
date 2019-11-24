import React from 'react'
import Logo from '../../assets/images/logo.png'
import { PageHeader } from 'antd';
import { isAuthenticated, getToken } from '../../service/Auth';
export default function Header() {
    const option = {
        position: 'fixed',
        overflow: 'hidden',
        width:'100%',
        top: '0',
        backgroundColor: 'silver',
        border: '2px solid rgb(20, 20, 20)',
        borderRadius: '5px'

    }
    return (
        <div>
            <PageHeader style={option} >
                <img style={{ float: 'left' }} src={Logo} width={50} alt="Logotipo da Codenation" />
                {isAuthenticated() ? <p style={{ textAlign: 'right' }}></p> : null}
            </PageHeader>
        </div>
    )
}
