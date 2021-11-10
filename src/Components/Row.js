import React, { useEffect,useState} from "react"
const Row = ({dt,deleteUserid,EditUser,fastEdit }) => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
    const [isedit,setEdit] = useState(false);
    
    function edit(){
      setEdit(true);
    }
    // useEffect(() => {
    //    setName((name==='')?dt&&dt.name:name);
    //    setAge((name==='')?dt&&dt.age:age);
    //    setAddress((name==='')?dt&&dt.address:address);
    //    setPhone((name==='')?dt&&dt.phone:phone);
    // }, [dt])
    return(
        
        <>

        <tr >
          <th scope="row" >{dt.id}</th>
          <td onClick={edit}><input type="text"  style={{ border: 'none' }} onChange={(e) => setName(e.target.value)} readOnly={!isedit} value={(name==='')?dt&&dt.name:name} /></td>
          <td onClick={edit}><input type="text" className="col-12" style={{ border: 'none' }} onChange={(e) => setAge(e.target.value)} readOnly={!isedit} value={(age==='')?dt&&dt.age:age} /></td>
          <td onClick={edit}><input type="text" className="col-12" style={{ border: 'none' }} onChange={(e) => setAddress(e.target.value)} readOnly={!isedit} value={(address==='')?dt&&dt.address:address} /></td>
          <td onClick={edit}><input type="text" className="col-12" style={{ border: 'none' }} onChange={(e) => setPhone(e.target.value)} readOnly={!isedit} value={(phone==='')?dt&&dt.phone:phone} /></td>
          <td>
          <button className="btn btn-primary" hidden={!isedit} onClick={() => { fastEdit(dt.id, name,age,address,phone); setEdit(false); }}>Update</button>
          <button className="btn btn-primary" hidden={isedit} onClick={()=>{EditUser(dt)}} >Edit</button>
              <button className="btn btn-danger" onClick={()=>{deleteUserid(dt.id)}} >Del</button>
          </td>
        </tr>
        </>
    )
}
export default React.memo(Row);