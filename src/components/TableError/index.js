import React from 'react';
import Button from '../Button'
import { Table,Icon } from 'antd'
import api from '../../service/api'

export default function TableError(data, functionClicked, setPage) {

  let options = []
  const columns = [
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Titulo',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Origem',
      dataIndex: 'origin',
      key: 'origin',
    },
    {
      title: 'Eventos',
      dataIndex: 'events',
      key: 'events',
    },

  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      options = selectedRows;
    }
  };
  const deleteError = () => {
    if (window.confirm('Deseja deletar mesmo?')) {
      options.map(del => {
        let url = '/v1/error/aggregates?' +
          "environment=" + del.environment +
          "&title=" + del.title +
          "&origin=" + del.origin +
          "&level=" + del.level;
        api.delete(url)
      })
      alert("Erros deletados")
      window.location.reload();
    }
  }
  const archieveError = () => {
    if (window.confirm('Deseja arquivar mesmo?')) {
      options.map(del => {
        let url = '/v1/error/aggregates/archived?' +
          "environment=" + del.environment +
          "&title=" + del.title +
          "&origin=" + del.origin +
          "&level=" + del.level;
        api.patch(url)
      })
      alert("Erros arquivados")
      window.location.reload();
    }
  }
  const pagination = {
    defaultCurrent: 1,
    total: (data.data.totalPages*10),
    onChange:(ev)=>{setPage(ev)}
  }
  return (
    <div>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <Button text={<Icon type="delete"/>} onClick={ev => { deleteError() }} />
        <Button text={<Icon type="inbox"/>} onClick={ev => { archieveError() }} />
      </div>
      <Table pagination={ pagination } columns={columns}
        rowSelection={rowSelection}
        onRow={(r) => ({
          onClick: () => (functionClicked(r.lastErrorId))
        })}
        dataSource={data.data.content} />
    </div>
  )
}