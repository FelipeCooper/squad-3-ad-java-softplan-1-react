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
        paddingTop:'0px',
        backgroundColor: 'silver',
        border: '1px solid rgb(20, 20, 20)',
        zIndex:'2',
        height:'40px'
    }
    return (
        <div>
            <PageHeader style={option}>
                <img style={{ float: 'left' }} src={Logo} width={40} alt="Logotipo da Codenation" />
                {isAuthenticated() ? <p style={{ textAlign: 'right' }}></p> : null}
            </PageHeader>
        </div>
    )
}
