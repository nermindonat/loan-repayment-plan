import Input from "../input/Input";
import React, { useRef } from "react";
import "./userForm.css";

const UserForm = () => {
  const loanAmountRef = useRef();
  const paymentNumberRef = useRef();
  const profitRateRef = useRef();
  const selectOneRef = useRef();
  const selectTwoRef = useRef();
  const selectThreeRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(loanAmountRef.current.getValue(), paymentNumberRef.current.getValue(), profitRateRef.current.getValue());
  };

  return (
    <div className="user-form">
      <form>
        <Input
          label={"Kredi Tutari"}
          type="number"
          name={"krediTutari"}
          ref={loanAmountRef}
        />
        <Input
          label={"Taksit sayisi"}
          type="number"
          name={"taksitSayisi"}
          ref={paymentNumberRef}
        />
        <Input
          label={"Kar orani"}
          type="number"
          name={"karOrani"}
          ref={profitRateRef}
        />
        <label>Taksit Aralığı</label>
        <select name="select" id="" ref={selectOneRef}>
          <option value="1">Haftalık</option>
          <option value="2">Aylık</option>
          <option value="3">Yıllık</option>
        </select>
        <label>Vergi Oranı</label>
        <select name="select" id="" ref={selectTwoRef}>
          <option value="1">KKDF</option>
          <option value="2">BSMV</option>
        </select>
        <label>Kar Formülü</label>
        <select name="select" id="" ref={selectThreeRef}>
          <option value="1">Basit</option>
          <option value="2">Bileşik</option>
        </select>
        <button type="submit" onClick={formSubmitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
