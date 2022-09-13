import React from "react";
import "./userForm.css";

const UserForm = () => {
  return (
    <div className="user-form">
      <form>
        <label>Kredi Tutarı</label>
        <input className="user-input" type="text" name="name" />
        <label>Taksit Sayısı</label>
        <input className="user-input" type="text" name="name" />
        <label>Kar Oranı</label>
        <input className="user-input" type="text" name="name" />
        <label>Taksit Aralığı</label>
        <select name="select" id=""> 
          <option value="1">Haftalık</option>
          <option value="2">Aylık</option>
          <option value="3">Yıllık</option>
        </select>
        <label>Vergi Oranı</label>
        <input className="user-input" type="text" name="name" />
      </form>
    </div>
  );
};

export default UserForm;
