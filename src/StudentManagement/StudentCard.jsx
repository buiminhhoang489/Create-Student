import React from 'react'

export default function StudentCard({student, index, handleDeleteFunction, setEditFormControl,  getStudent}) {
  return (
    
    // <tr key ={student.id}>
       <tr>
    <th scope="row">{index}</th>
    <td>{student.name}</td>
    <td>{student.sex =='nam' ? "Nam" : "Nữ"}</td>
    <td>{student.dateofbirth}</td>
    <td><button className='btn btn-danger' onClick = {()=> handleDeleteFunction(student.id)} >Delete</button>
    <button className='btn btn-danger' onClick = {()=>{
      setEditFormControl(true)
      getStudent(student)
    }}>Update</button></td>
  
  </tr>

    
  )
}
