import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='main_form'>
        <input type="text" name="name" id="name" placeholder='Enter Your Name' className='Form_Name' />
        <input type="email" name="email" id="email" placeholder='Enter Your Email' className='Form_Name'/>
        <input type="text" name="message" id="message" className='Form_Message'/>
        <input type="submit" value="SUBMIT" className='Form_Button'/>
    </div>
  )
}

export default Form