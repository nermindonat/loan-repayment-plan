import React from 'react'
import "./table.css"

const Table = () => {
  return (
    <div className='container'>
      <table>
        <thead>
            <tr>
                <th>Taksit No</th>
                <th>Taksit Tutarı</th>
                <th>Ana Para</th>
                <th>Kalan Ana Para</th>
                <th>Kar Tutarı</th>
                <th>KKDF</th>
                <th>BSMV</th>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default Table
