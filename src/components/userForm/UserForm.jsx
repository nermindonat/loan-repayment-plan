import Input from "../input/Input";
import React, { useRef } from "react";
import "./userForm.css";
import Select from "../select/Select";
import { useDataContext } from "../../context/DataForm";

const UserForm = () => {
  const { setData } = useDataContext();


  const loanAmountRef = useRef();
  const paymentNumberRef = useRef();
  const profitRateRef = useRef();
  const selectOneRef = useRef();
  const selectTwoRef = useRef();
  const selectThreeRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setData({
      creditAmount: loanAmountRef.current.getValue(),
      installmentNumber: paymentNumberRef.current.getValue(),
      interestRate: profitRateRef.current.getValue(),
      installmentInterval: selectOneRef.current.getValue(),
      taxRate: selectTwoRef.current.getValue(),
      profitPeriod: selectThreeRef.current.getValue(),
    });
  };

  return (
    <div className="user-form">
      <form>
        <Input
          label={"Kredi Tutari"}
          type="number"
          name={"creditAmount"}
          ref={loanAmountRef}
        />
        <Input
          label={"Taksit sayisi"}
          type="number"
          name={"installmentNumber"}
          ref={paymentNumberRef}
        />
        <Input
          label={"Faiz Orani"}
          type="number"
          name={"interestRate"}
          ref={profitRateRef}
        />

        <Select
          label={"Taksit Aralığı"}
          name={"installmentInterval"}
          ref={selectOneRef}
          options={[
            { label: "Haftalık", value: "haftalik" },
            { label: "Aylık", value: "aylik" },
            { label: "Yıllık", value: "yillik" },
          ]}
        />
        <Select
          label={"Vergi Oranı"}
          name={"taxRate"}
          ref={selectTwoRef}
          options={[
            { label: "KKDF", value: "kkdf" },
            { label: "BSMV", value: "bsmv" },
          ]}
        />
        <Select
          label={"Kar Formülü"}
          name={"profitPeriod"}
          ref={selectThreeRef}
          options={[
            { label: "Basit", value: "basit" },
            { label: "Bileşik", value: "bilesik" },
          ]}
        />
        <button type="submit" onClick={formSubmitHandler}>
          Hesapla
        </button>
      </form>
    </div>
  );
};

export default UserForm;
