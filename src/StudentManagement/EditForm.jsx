import React from 'react'

export default function EditForm({ editStudent, setEditFormControl, handleEditStudent }) {
    return (
        <div className='form_screen'>
            <form className='edit_form' onSubmit={(event) => {
                event.preventDefault();
                handleEditStudent({
                    id: editStudent.id,
                    name: event.target.name.value,
                    sex: event.target.sex.value,
                    dateofbirth: event.target.birthDate.value,
                                })
                setEditFormControl(false)
            }}>
                <h3>Chỉnh sửa thông tin sinh viên</h3>
                <button type='button' className='close_btn' onClick={() => {
                    setEditFormControl(false)
                }}>X</button>
                <div className='input_field'>
                    <div>
                        Tên sinh viên: <input type="text" name='name' />
                    </div>
                    <div>
                        Giới tính:
                        <span>
                            Nam <input type="radio" name="sex" value='nam' defaultChecked />
                            Nữ <input type="radio" name="sex" value='nu' />
                        </span>
                    </div>
                    <div>
                        Ngày sinh: <input type="date" name='birthDate' />
                    </div>
                                 </div>
                <button type='submit' className='add_btn'>Chỉnh sửa</button>
            </form>
        </div>
    )
}
