import React from 'react'
import './form.css'
const Contact = () => {
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(e)
  alert('Your message sent..')
}
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input type="text" placeholder="Name" required/>
      <input type="email" placeholder="Email" required/>
      <textarea placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contact