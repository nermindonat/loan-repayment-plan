import React from "react";
import { useDataContext } from "../../context/DataForm";
import "./table.css";

const Table = () => {
  const { data } = useDataContext();
  console.log(data);

  const faizOrani =  2.28;
  const kkdf = (faizOrani * 0.15);
  const bsmv = (faizOrani * 0.05);
  console.log(kkdf, bsmv);

  if (!data) {
    return null;
  }

  const taksitTutari = (data.krediTutari * (faizOrani * (1 + faizOrani)**data.taksitSayisi) / 
  (1 + faizOrani)**data.taksitSayisi - 1).toFixed(2);


  const haftalik = 0;
  const aylik = 0;
  const yillik = 0;
  
  
    if (data.taksitAraligi===haftalik) {
      const karTutari = (data.krediTutari * data.karOrani * (7/30)).toFixed(2);
      console.log(karTutari);
    }
    else if (data.taksitAraligi===aylik) {
      const karTutari = (data.krediTutari * data.karOrani * (30/30)).toFixed(2);
      console.log(karTutari);
    }
    else if (data.taksitAraligi===yillik) {
      const karTutari = (data.krediTutari * data.karOrani * (365/30)).toFixed(2);
      console.log(karTutari);
    }
 
  
  

  const tableData = Array(+data.taksitSayisi)
    .fill(null)
    .map((_, idx) => {
      return {
        taksitNo: idx + 1,
        taksitTutari: taksitTutari,
        anaPara: 0,
        kalanAnaPara: 0,
        karTutari: 0,
        KKDF: 0,
        BSMV: 0,
      };
    });

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
          {tableData.map((i) => {
            return (
              <tr key={i.taksitNo}>
                <td>{i.taksitNo}</td>
                <td>{i.taksitTutari}</td>
                <td>{i.anaPara}</td>
                <td>{i.kalanAnaPara}</td>
                <td>{i.karTutari}</td>
                <td>{i.KKDF}</td>
                <td>{i.BSMV}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
