
import './App.css';
import Table from './Components/Table.js';
import Form from './Components/Form.js';
import { useState } from "react";
import Data from './data.json'
function App() {
  const [data,setData] = useState(Data);
  const[userEdit,setUserEdit] =useState({});
  
  const addValue =(id,name,age,address,phone)=>{
   const newArr = [...data];
   newArr.push({id:id,name:name,age:age,address:address,phone:phone});
   setData(newArr);
  }
  // function FastEdit(id,name,age,address,phone){
  //   setData(
  //     data.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           name:name,
  //           age:age,
  //           address:address,
  //           phone:phone
  //         };
  //       } else return item;
  //     })
  //   );
  // }
  function Deleteuser(id){
    const newUsers = data.filter((data) => data.id!== id);
    setData(newUsers);
  }
  function UpdateUser(currentId, currentName, currentage, currentAddress, currentPhone) {
    setData(
      data.map((item) => {
        if (item.id === currentId) {
          return {
            ...item,
            name:currentName,
            age:currentage,
            address:currentAddress,
            phone:currentPhone
          };
        } else return item;
      })
    );
  }
  return (
    <div className="App">
    <div className="container">
    <div className="row">
        <div className="col-6">
        <Table User={data} EditUser={(data)=>setUserEdit(data)} deleteUserid={Deleteuser} fastEdit={UpdateUser} setUser={setData} />
        </div>
        <div className="col-6">
        <Form AddUser={addValue} userEdit={userEdit} UpdateUser={UpdateUser} />
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default App;
