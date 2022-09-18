import React from "react";
import { useDataContext } from "../../context/DataForm";
import "./table.css";

const Table = () => {
  const { data } = useDataContext();
  console.log(data);

  if (!data) {
    return null;
  }

  let aralik;
    if (data.taksitAraligi === "haftalik") {
      aralik = 7;
    } else if (data.taksitAraligi === "aylik") {
      aralik = 30;
    } else {
      aralik = 365;
    }


  const bsmvOrani = 5;
  const kkdfOrani = 15;
  let taksitTutari = 0;
  let anaPara = 0;
  let kalanAnaPara = 0;
  let bsmvMiktari = 0;
  let kkdfMiktari = 0;
  let karTutari = 0;

  if (data.karFormulu === "basit") {    
   
    const {krediTutari, faizOrani, taksitSayisi} = data;  // Destructing 

    const faizTutari = krediTutari * faizOrani * taksitSayisi;
    console.log(faizTutari);

    bsmvMiktari = (faizTutari * bsmvOrani) / 100;
    kkdfMiktari = (faizTutari * kkdfOrani) / 100;

    taksitTutari =
      (krediTutari * faizOrani * taksitSayisi +
        (bsmvMiktari + kkdfMiktari) +
        krediTutari) /
      taksitSayisi;
    // FARK = TAKSİT TUTARI - (FAIZ+BSMV+KKDF MIKTARI)
    anaPara = faizTutari + krediTutari;
    // const fark= (faizTutari + bsmvMiktari + kkdfMiktari) - taksitTutari;
    kalanAnaPara = anaPara - taksitTutari;
    // console.log(taksitTutari, anaPara, kalanAnaPara, );
    karTutari = krediTutari * (1 + faizOrani) ** (aralik / 30) - anaPara;
  }

  if (data.karFormulu === "bilesik") {
    const faizOrani = data.faizOrani;
    const taksitSayisi = data.taksitSayisi;
    const krediTutari = data.krediTutari;
    const faizTutari = krediTutari * faizOrani * taksitSayisi;
    anaPara = faizTutari + krediTutari;

    for (let i = 0; i <= data.taksitSayisi; i++) {
      taksitTutari =
      data.krediTutari * data.faizOrani * (1 + data.faizOrani) ** 12;

      anaPara -= taksitTutari;
      console.log("sdsadd", anaPara);
      kalanAnaPara = anaPara - taksitTutari;

      // Kâr = ( Anapara * ( ( 1 + kâr oranı) ^ (gün sayısı / 30) ) ) - Anapara
      karTutari = krediTutari * (1 + faizOrani) ** (aralik / 30) - anaPara;
      console.log("kar tutarı", karTutari);
      bsmvMiktari = (faizTutari * bsmvOrani) / 100;
      kkdfMiktari = (faizTutari * kkdfOrani) / 100;
    }
  }


  console.log("taksit tutarı", taksitTutari);
  if (data) {
   
 
  const tableData = Array(+data.taksitSayisi)
    .fill(null)
    .map((_, idx) => {
      return {
        taksitNo: idx + 1,
        taksitTutari: taksitTutari,
        anaPara: anaPara,
        kalanAnaPara: kalanAnaPara,
        karTutari: karTutari,
        KKDF: kkdfMiktari,
        BSMV: bsmvMiktari,
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
}
};

export default Table;
