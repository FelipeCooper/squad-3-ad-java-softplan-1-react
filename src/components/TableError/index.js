import React from 'react';
import Button from '../Button'
import { Table } from 'antd'
import api from '../../service/api'

export default function TableError(data, functionClicked) {
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
        let url = '/v1/error/aggregates?'+
        "environment="+del.environment+
        "&title="+del.title+
        "&origin="+del.origin+
        "&level="+del.level;
        api.delete(url)
      })
      alert("Erros deletados")
      window.location.reload();
    }
  }
  const pagination = {
    defaultCurrent: 1, total: '50'
  }
  return (
    <div>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <Button text="Deletar" onClick={ev => { deleteError() }} />
      </div>
      <Table pagination={{ pagination }} columns={columns}
        rowSelection={rowSelection}
        onRow={(r) => ({
          onClick: () => (functionClicked(r.lastErrorId))
        })}
        dataSource={data} />
    </div>
  )
}