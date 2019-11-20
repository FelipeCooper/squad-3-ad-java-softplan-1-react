import React, { useState, useEffect } from 'react';
export default function TableError(data) {


  return (
    <table>
      <tr>
        <td><b>Level</b></td>
        <td style={{width:"400px", textAlign:"center"}}><b>Log</b></td>
        <td><b>Eventos</b></td>
      </tr>
      {data.map((data, functionClick) => {
        return (
          <tr key={data.lastErrorId} onClick={functionClick}>
            <td>{data.level}</td>
            <td>
              <tr key={data.lastErrorId} >
                {data.title}
              </tr>
              <tr key={data.lastErrorId} >
                {data.origin}
              </tr>
              <tr key={data.lastErrorId} >
                {new Date(data.lastErrorDate).toDateString()}
              </tr>
            </td>
            <td>{data.events}</td>
          </tr>
        )
      })}
    </table>)
}