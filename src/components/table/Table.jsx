import React from "react";
import { useDataContext } from "../../context/DataForm";
import "./table.css";

const Table = () => {
  const { data } = useDataContext();
  console.log(data);

  if (!data) {
    return null;
  }

  let space;
    if (data.installmentInterval === "haftalik") {
      space = 7;
    } else if (data.installmentInterval === "aylik") {
      space = 30;
    } else {
      space = 365;
    }

  const bsmvRate = 5;
  const kkdfRate = 15;
  let installmentAmount = 0;
  let principal = 0;
  let remainingPrincipal = 0;
  let bsmvQuantity = 0;
  let kkdfQuantity = 0;
  let profitAmount = 0;

  if (data.profitPeriod === "basit") {    
   
    const {creditAmount, interestRate, installmentNumber} = data;  // Destructing 
    const interestAmount = (creditAmount * interestRate * installmentNumber) / 100;

    bsmvQuantity = (interestAmount * bsmvRate) / 100;
    kkdfQuantity = (interestAmount * kkdfRate) / 100;

    installmentAmount = ((creditAmount * interestRate * installmentNumber + (bsmvQuantity + kkdfQuantity) + creditAmount) / installmentNumber).toFixed(2);
    //taksit tutarı - ( BSMV+KKDF)
    principal = (installmentAmount - (bsmvQuantity + kkdfQuantity)).toFixed(2);
    //Kredi miktarı - taksit tutarı 
    remainingPrincipal = (creditAmount - installmentAmount).toFixed(2);
    profitAmount = (creditAmount * (1 + interestRate) ** (space / 30) - principal).toFixed(2);
  }

  if (data.profitPeriod === "bilesik") {
    const interestRate = data.interestRate;
    const installmentNumber = data.installmentNumber;
    const creditAmount = data.creditAmount;
    const interestAmount = creditAmount * interestRate * installmentNumber;
    // principal = installmentAmount - (bsmvQuantity + kkdfQuantity);

    for (let i = 0; i <= data.installmentNumber; i++) {
      installmentAmount = creditAmount * (1 + interestRate) ** (space / 30) - principal;;
      principal = installmentAmount - (bsmvQuantity + kkdfQuantity);
      remainingPrincipal = (creditAmount - installmentAmount).toFixed(2);
      profitAmount = creditAmount * (1 + interestRate) ** (space / 30) - principal;
      bsmvQuantity = (interestAmount * bsmvRate) / 100;
      kkdfQuantity = (interestAmount * kkdfRate) / 100;
    }
  }


  if (data) {
  const tableData = Array(+data.installmentNumber)
    .fill(null)
    .map((_, idx) => {
      return {
        paymentNumber: idx + 1,
        installmentAmount: installmentAmount,
        principal: principal,
        remainingPrincipal: remainingPrincipal,
        profitAmount: profitAmount,
        KKDF: kkdfQuantity,
        BSMV: bsmvQuantity,
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
              <tr key={i.paymentNumber}>
                <td>{i.paymentNumber}</td>
                <td>{i.installmentAmount}</td>
                <td>{i.principal}</td>
                <td>{i.remainingPrincipal}</td>
                <td>{i.profitAmount}</td>
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
