import React,{ useEffect, useState } from "react";

const Form = ({ AddUser, userEdit,UpdateUser}) => {
    const [currentId, setCurrentId] = useState();
    const [currentName, setCurrentName] = useState('');
    const [currentage, setcurrentAge] = useState('');
    const [currentAddress, setcurrentAddress] = useState('');
    const [currentPhone, setcurrentPhone] = useState('');
    const [status,setStatus] = useState(true);
    function OnchangeName(e) {
        const value = e.target.value;
        setCurrentName(value);
      }
      function OnChangeAge(e) {
        const value = e.target.value;
        setcurrentAge(value);
      }
      function OnChangeAddress(e) {
        const value = e.target.value;
        setcurrentAddress(value);
      }
      function OnChangePhone(e) {
        const value = e.target.value;
        setcurrentPhone(value);
      }
      function ValidateAll() {
        var check = true;
        var regexText = /^([a-zA-Z\s?]+){1,}$/;
        if (!regexText.test(currentName)) {
          document.getElementById("Name").classList.add("is-invalid");
           check = false;
        } else {
          document.getElementById("Name").classList.remove("is-invalid");
          document.getElementById("Name").classList.add("is-valid");
        }
        if (!regexText.test(currentAddress)) {
            document.getElementById("Address").classList.add("is-invalid");
             check = false;
          } else {
            document.getElementById("Address").classList.remove("is-invalid");
            document.getElementById("Address").classList.add("is-valid");
          }
         var regexAge = /^([0-9]+){1,}$/
          if (!regexAge.test(currentage)) {
            document.getElementById("Age").classList.add("is-invalid");
             check = false;
          } else {
            document.getElementById("Age").classList.remove("is-invalid");
            document.getElementById("Age").classList.add("is-valid");
          }
          if (!regexAge.test(currentPhone)) {
            document.getElementById("Phone").classList.add("is-invalid");
             check = false;
          } else {
            document.getElementById("Phone").classList.remove("is-invalid");
            document.getElementById("Phone").classList.add("is-valid");
          }
        if(check){
          return true;
        }else{
          return false;
        }
        
      }
      function onSubmit(e) {
        const isValid = ValidateAll();
        if (!isValid) {
          e.preventDefault();
          return;
        }else{
            e.preventDefault();
            AddUser(currentId, currentName, currentage, currentAddress, currentPhone);
            setCurrentId('');
            setCurrentName('');
            setcurrentAddress('');
            setcurrentAge('');
            setcurrentPhone('');
        }
      
      }
      function onUpdate(e) {
        const isValid = ValidateAll();
        if (!isValid) {
          e.preventDefault();
          return;
        }else{
            e.preventDefault();
            UpdateUser(currentId, currentName, currentage, currentAddress, currentPhone);
            setCurrentId('');
            setCurrentName('');
            setcurrentAddress('');
            setcurrentAge('');
            setcurrentPhone('');
            setStatus(true);
        }
      
      }

useEffect(()=>{
    setStatus(userEdit.id === undefined ? true : false)
    setCurrentId(userEdit.id === undefined ? currentId : userEdit.id);
    setCurrentName(userEdit.name === undefined ? currentName : userEdit.name);
    setcurrentAge(userEdit.age === undefined ? currentage : userEdit.age);
    setcurrentAddress(userEdit.address === undefined ? currentAddress : userEdit.address);
    setcurrentPhone(userEdit.phone === undefined ? currentPhone : userEdit.phone);
},[userEdit]);
    return (
        <form action="">
            <div className="mb-3 row mt-5 ">
                <label className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input
                    id="Name"
                        type="text"
                        className="form-control"
                        value={currentName}
                        onChange={OnchangeName}
                    /><small className="invalid-feedback">Title is invalid</small>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">
                    Age
                </label>
                <div className="col-sm-10">
                    <input
                    id="Age"
                        type="text"
                        className="form-control"
                        value={currentage}
                        onChange={OnChangeAge}
                    /><small className="invalid-feedback">Title is invalid</small>
                </div>
            </div>
            <div className="mb-3 row ">
                <label className="col-sm-2 col-form-label">
                    Address
                </label>
                <div className="col-sm-10">
                    <input
                    id="Address"
                        type="text"
                        className="form-control"
                        value={currentAddress}
                        onChange={OnChangeAddress}
                    /><small className="invalid-feedback">Title is invalid</small>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">
                    Phone
                </label>
                <div className="col-sm-10">
                    <input
                    id="Phone"
                        type="text"
                        className="form-control"
                        value={currentPhone}
                        onChange={OnChangePhone}
                    /><small className="invalid-feedback">Title is invalid</small>
                </div>
            </div>
            <button type="button" hidden={(status===true)?"":"hidden"} onClick={onSubmit} className="btn btn-success">
                Add
            </button>
            <button  className="btn btn-success" hidden={(!status)?"":"hidden"} onClick={onUpdate
            }> Update</button>
        </form>
    );
};
export default React.memo(Form)
