
import { useState } from 'react';
import './App.css';

function App() {
const [pan,setPan]=useState([{name:'pankaj',guj:70,hin:74,eng:98}])
const [val1,setVal1]=useState('')
const [val2,setVal2]=useState('')
const [val3,setVal3]=useState('')
const [val4,setVal4]=useState('')
const [ed,setEd]=useState(-1)
const [val5,setVal5]=useState('')
const [val6,setVal6]=useState('')
const [val7,setVal7]=useState('')
const [val8,setVal8]=useState('')

let addHandler=()=>{
  if(val1){
    setVal5("")
  }
  else{
    setVal5("enter name")
  }
  if(val2){
    setVal6("")
  }
  else{
    setVal6("enter guj")
  }
  if(val3){
    setVal7("")
  }
  else{
    setVal7("enter hin")
  }
  if(val4){
    setVal8("")
  }
  else{
    setVal8("enter eng")
  }
    if(ed >=0){
if(val1 && val2 && val3 && val4){
      let copyPan2=[...pan]
      copyPan2.splice(ed,1,{name:val1,guj:val2,hin:val3,eng:val4})
      setPan(copyPan2)
      setVal1('')
      setVal2('')
      setVal3('')
      setVal4('')
      setEd(-1)
      }
    }
else{
    if(val1 && val2 && val3 && val4){
      let copyPan=[...pan]
  copyPan.push({name:val1,guj:val2,hin:val3,eng:val4})
  setPan(copyPan)
  setVal1('')
  setVal2('')
  setVal3('')
  setVal4('')
  setVal5('')
  setVal6('')
  setVal7('')
  setVal8('')
    }
}}

let editHandler1=(aa)=>{
  setVal1(aa.target.value)
}
let editHandler2=(aa)=>{
  setVal2(aa.target.value)
}
let editHandler3=(aa)=>{
  setVal3(aa.target.value)
}
let editHandler4=(aa)=>{
  setVal4(aa.target.value )
}
let deleteHandler=(i)=>{
  let copyPan=[...pan]
  copyPan.splice(i,1)
  setPan(copyPan)
}
const editHandler=(aa,i)=>{
  setVal1(aa.name)
  setVal2(aa.guj)
  setVal3(aa.hin)
  setVal4(aa.eng)
  setEd(i)
}

  return (
    <>
    <div className='mm'>
     <input onChange={editHandler1} value={val1} placeholder="enter name" type="text" />
     <input onChange={editHandler2} value={val2} placeholder="enter guj" type="text" />
     <input onChange={editHandler3} value={val3} placeholder="enter hin" type="text" /> 
     <input onChange={editHandler4} value={val4} placeholder="enter eng" type="text" /> 
     <input onClick={addHandler} type="submit" />  
     </div>
     <div className='ppp'>
      <p className='pp'>{val5}</p>
      <p className='pp'>{val6}</p>
      <p className='pp'>{val7}</p>
      <p className='pp'>{val8}</p>
     </div>
     <table>
      <tr>
        <th>name</th>
        <th>guj</th>
        <th>hin</th>
        <th>eng</th>
        <th>delete</th>
        <th>edit</th>
      </tr>
      {pan.map((aa,i)=>{
        return <tr>
          <td>{aa.name}</td>
          <td>{aa.guj}</td>
          <td>{aa.hin}</td>
          <td>{aa.eng}</td>
          <td>
            <button onClick={()=>deleteHandler(i)}>delete</button>
            </td>
            <td>
            <button onClick={()=>editHandler(aa,i)}>edit</button>
            </td>
        </tr>
      })}
     </table>
    </>
  );
}

export default App;
