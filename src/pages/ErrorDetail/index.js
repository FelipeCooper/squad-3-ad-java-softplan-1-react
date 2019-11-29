import React, { useState, useEffect } from 'react';
import { Col, Row, Popover } from 'antd'
import { useParams } from 'react-router-dom';
import { SearchOne } from '../../service/SearchService';
import Tag from '../../components/TagLevel'
import Button from '../../components/Button'
const ErrorPanel = () => {
    let { id, events } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let request = await SearchOne(id)
            setData(request)
            console.log(request)
        }
        fetchData()

    }, [])

    return (
        <>
            {data.map(err => {
                return (<>
                    <Row style={{ margin: 16 }}>
                        <Col>
                            <Button text="Voltar" href={'/'} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{ marginTop: 16 }}>

                        <Col cen span={18} ><h2>{err.level} no {err.origin} em {err.createdAt}</h2></Col>
                    </Row>
                    <Row type="flex" justify="center" style={{ marginTop: 16 }}>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}> <h3>Titulo</h3> </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4}><Tag level={err.level} />  </Col>
                        <Col cen span={14}> {err.title}</Col>
                    </Row>
                    <Row type="flex" justify="center" style={{ marginTop: 16 }}>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}> <h3>Detalhes</h3> </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                            <b>Eventos</b><br />
                            {events}
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" style={{ marginTop: 16 }}>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}> {err.description} </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                            <b>Coletado por:</b><br />
                            <Popover style={{ float: 'right' }} placement='bottomRight' content={"Email: " + err.user.email} arrowPointAtCenter >
                                <a style={{ color: 'black' }}>{err.user.name}</a>
                            </Popover>
                        </Col>
                    </Row>

                </>
                )
            })}

        </>
    )
}

export default ErrorPanel;