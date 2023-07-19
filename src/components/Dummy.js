import React,{useState} from 'react'
import UpdateData from './UpdateData'
import {Link} from 'react-router-dom'
const Dummy=()=>{
    const [updateBtn,setUpdateBtn]=useState(false)
    const [inputs,setInputs]=useState({
        id:'',name:'',marks:''
    })
    const [data,setData]=useState([{
        id:1,
        name:'vips',
        marks:25
    },{
        id:2,
        name:'john',
        marks:30
    }])

    const handleData=(e)=>{
        const {name,value}=e.target;
        setInputs({...inputs,[name]:value})
    }
    const handleSubmt=(inputs)=>{
        setData([...data,inputs])
        setInputs({
            id:'',name:'',marks:''
    })

    }
    const handleDelete=(id)=>{
        let sub=data.filter((elem)=>elem.id!==id)
        setData(sub)
    }
    const handleEdit=(id)=>{
        let sub=data.find((elem)=>elem.id===id)
        setInputs(sub)
        setUpdateBtn(true)
    }
    const handleUpdate=(inputs)=>{
        let index=data.findIndex((v)=>v.id===inputs.id)
        let mdata=[...data]
        mdata.splice(index,1,inputs)
        setData(mdata)
        setInputs({
            id:'',name:'',marks:''
    })
    setUpdateBtn(false)
    }
    return(
        <div className='container'>
        <div className='inputs'>
            <input name='id' onChange={handleData} value={inputs.id} readOnly={updateBtn}/><br/>
            <input name='name' onChange={handleData} value={inputs.name}/><br/>
            <input name='marks' onChange={handleData} value={inputs.marks}/><br/>
            {updateBtn ?<button onClick={()=>handleUpdate(inputs)}>UPDATE</button> : <button onClick={()=>handleSubmt(inputs)}>SUBMIT</button>}
        </div>
        <div className='dataList'>
        <ul>
        {
            data.map((e)=>{
            return (
                <div key={e.id}>
                    {e.id}-{e.name}-{e.marks} 
                    <button onClick={()=>handleEdit(e.id)}>🖊 EDIT</button>  
                    <button onClick={()=>handleDelete(e.id)}>🗑 Delete</button> 
                </div>
            )})
        }
        </ul>
        </div>
        </div>
    )
}

export default Dummy;