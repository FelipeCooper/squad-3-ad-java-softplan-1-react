import React, { useState, useEffect } from 'react';
export default function TableError(data,functionClicked) {

  return (
    <table>
      <tbody>
        <tr>
          <td><b>Level</b></td>
          <td style={{ width: "400px", textAlign: "center" }}><b>Log</b></td>
          <td><b>Eventos</b></td>
        </tr>
        {data.map((data) => {
          return (
            <tr key={data.lastErrorId} onClick={(ev)=>{functionClicked(data.lastErrorId)}} >
              <td>{data.level}</td>
              <td>
                <tr>
                  {data.title}
                </tr>
                <tr>
                  {data.origin}
                </tr>
                <tr>
                  {new Date(data.lastErrorDate).toDateString()}
                </tr>
              </td>
              <td>{data.events}</td>
            </tr>
          )
        })}
      </tbody>
    </table>)
}