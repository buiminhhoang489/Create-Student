import React, { useState } from 'react'
import StudentCard from './StudentCard'
import AddForm from './AddForm'
import EditForm from './EditForm'
import './studentlist.scss'
export default function StudentManager() {
    const [students, setnewStudents] = useState([{
        id: Date.now() * Math.random(),
        name: "alcatraz",
        sex: 0,
        dateofbirth: "2023-11-07"
    }])
    const [addForm, setAddForm] = useState(false)
    const [editFormControl, setEditFormControl] = useState(false)
        function handleDeleteFunction(studentID) {
        if(!window.confirm("ban co muon xoa khong")) return
        setnewStudents(students.filter(student => student.id != studentID))
    }
    function handleAddStudent(newStudent) {
        
        setnewStudents([...students, newStudent])
    }
    let [editStudent, setEditStudent] = useState({});
    function getStudent(student) {
        setEditStudent( student)
    }
    function handleEditStudent(editedStudent) {
        setnewStudents(students.map((student) => {
            if (student.id === editedStudent.id) {
                return editedStudent;
            }
            return student; 
        }));
        setEditFormControl(false);
    }
    

        return (
        <div>
            <h2>StudentManager</h2>
          <button onClick ={() => {
            setAddForm(true)
          }}>Add</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Date of birth</th>
                        <th scope="col">Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => {
                            return (<StudentCard  handleDeleteFunction={handleDeleteFunction}  student={student} index={index} getStudent={getStudent} setEditFormControl={setEditFormControl} />)
                        })
                    }

                </tbody>
            </table>
            {
               addForm && <AddForm handleAddStudent ={handleAddStudent} setAddForm={setAddForm}  />
            }
             {
                editFormControl && <EditForm editStudent={editStudent} setEditFormControl={setEditFormControl} handleEditStudent={handleEditStudent} />
            }

        </div>
    )
}
