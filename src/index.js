import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/Routes'
import './style/index.css'
import 'antd/dist/antd.css'
import Header from './components/Header'
ReactDOM.render(
        <div>
                <Header />
                <Routes />
        </div>
        , document.getElementById('root'))
