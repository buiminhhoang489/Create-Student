import React from 'react'

export default function AddForm({ handleAddStudent, setAddForm }) {
    return (
        <div className='form_screen'>
            <form className='add_form' onSubmit={(event) => {
                // event.preventDefault();
                handleAddStudent({
                    id: Date.now() * Math.random(),
                    name: event.target.name.value,
                    sex: event.target.sex.value,
                    dateofbirth: event.target.birthDate.value,
                })
                setAddForm(false)
            }}>
                <h3>Nhập thông tin sinh viên mới</h3>
                <button className='close_btn' onClick={() => {
                    setAddForm(false)
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
                <button type='submit' className='add_btn'>Thêm</button>
            </form>
        </div>
    )
}
