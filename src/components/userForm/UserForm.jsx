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
      krediTutari: loanAmountRef.current.getValue(),
      taksitSayisi: paymentNumberRef.current.getValue(),
      karOrani: profitRateRef.current.getValue(),
      taksitAraligi: selectOneRef.current.getValue(),
      vergiOrani: selectTwoRef.current.getValue(),
      karFormulu: selectThreeRef.current.getValue(),
    });


  };

  return (
    <div className="user-form">
      <form>
        <Input
          label={"Kredi Tutari"}
          type="number"
          name={"krediTutari"}
          id={"krediTutari"}
          ref={loanAmountRef}
        />
        <Input
          label={"Taksit sayisi"}
          type="number"
          name={"taksitSayisi"}
          id={"taksitSayisi"}
          ref={paymentNumberRef}
        />
        <Input
          label={"Kar Orani"}
          type="number"
          name={"karOrani"}
          id={"karOrani"}
          ref={profitRateRef}
        />

        <Select
          label={"Taksit Aralığı"}
          name={"taksitAraligi"}
          ref={selectOneRef}
          options={[
            { label: "Haftalık", value: "haftalik" },
            { label: "Aylık", value: "aylik" },
            { label: "Yıllık", value: "yillik" },
          ]}
        />
        <Select
          label={"Vergi Oranı"}
          name={"taksivergiOrani"}
          ref={selectTwoRef}
          options={[
            { label: "KKDF", value: "kkdf" },
            { label: "BSMV", value: "bsmv" },
          ]}
        />
        <Select
          label={"Kar Formülü"}
          name={"karFormulu"}
          ref={selectThreeRef}
          options={[
            { label: "Basit", value: "basit" },
            { label: "Bileşik", value: "bilesik" },
          ]}
        />
        <button type="submit" onClick={formSubmitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
