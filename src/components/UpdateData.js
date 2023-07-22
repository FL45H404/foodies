import React from 'react'

const UpdateData = () => {

    const handleUpdate=()=>{}
  return (
    <div className='update'>
    <div className='inputs'>
    <input name='id' onChange={handleUpdate} value={''}/><br/>
    <input name='name' onChange={handleUpdate} value={''}/><br/>
    <input name='marks' onChange={handleUpdate} value={''}/><br/>
    <button onClick={()=>handleUpdate(inputs)}>SUBMIT</button>
</div>
    </div>
  )
}

export default UpdateData