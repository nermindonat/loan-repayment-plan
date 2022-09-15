import React from "react";
import { useDataContext } from "../../context/DataForm";
import "./table.css";

const Table = () => {
  const { data } = useDataContext();
  console.log(data);
  return (
    <div className="container">
      <span>Geri Ödeme Planı Tablosu</span>
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
        <tbody>
          <tr>
            <td>1</td>
            <td>acA</td>
            <td>XSC</td>
            <td>cczsc</td>
            <td>cssac</td>
            <td>csas</td>
            <td>sccsa</td>
          </tr>
          <tr>
            <td>1</td>
            <td>acA</td>
            <td>XSC</td>
            <td>cczsc</td>
            <td>cssac</td>
            <td>csas</td>
            <td>sccsa</td>
          </tr>
          <tr>
            <td>1</td>
            <td>acA</td>
            <td>XSC</td>
            <td>cczsc</td>
            <td>cssac</td>
            <td>csas</td>
            <td>sccsa</td>
          </tr>
          <tr>
            <td>1</td>
            <td>acA</td>
            <td>XSC</td>
            <td>cczsc</td>
            <td>cssac</td>
            <td>csas</td>
            <td>sccsa</td>
          </tr>
          <tr>
            <td>1</td>
            <td>acA</td>
            <td>XSC</td>
            <td>cczsc</td>
            <td>cssac</td>
            <td>csas</td>
            <td>sccsa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
