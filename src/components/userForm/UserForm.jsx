import React, {useRef} from "react";
import { useEffect } from "react";
import "./userForm.css";


const UserForm = () => {
  const loanAmountRef = useRef();
  const paymentNumberRef = useRef();
  const profitRateRef = useRef();
  const selectOneRef = useRef();
  const selectTwoRef = useRef();
  const selectThreeRef = useRef();


  const handleChange = () => {
    console.log(loanAmountRef.current.value, paymentNumberRef.current.value, profitRateRef.current.value, 
      selectOneRef.current.value, selectTwoRef.current.value, selectThreeRef.current.value);
  }

  useEffect(() => {
    console.log(loanAmountRef.current);
  })


  return (
    <div className="user-form">
      <form>
        <label>Kredi Tutarı</label>
        <input className="user-input" type="number" name="name" ref={loanAmountRef}/>
        <label>Taksit Sayısı</label>
        <input className="user-input" type="number" name="name" ref={paymentNumberRef}/>
        <label>Kar Oranı</label>
        <input className="user-input" type="number" name="name" ref={profitRateRef}/>
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
        <button onClick={handleChange}>Hesapla</button>
      </form>
    </div>
  );
};

export default UserForm;
