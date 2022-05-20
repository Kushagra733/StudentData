import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Popup.css'

export default function Popup(props) {

    const [object,setobj] = useState({
        firstname:'',
        lastname:'',
        place:''
    });


    const update = ()=>{
        axios.put('http://localhost:5000/students/'+props.id,object);
    }

   

    const handlefirst = (e)=>{
        setobj({
            firstname:e.target.value,
            lastname:object.lastname,
            place:object.place
        })
        console.log(object)
    }
    const handlelast = (e)=>{
        setobj({
            firstname:object.firstname,
            lastname:e.target.value, 
            place:object.place
        })
        console.log(object)
    }
    const handleplace = (e)=>{
        setobj({
            firstname:object.firstname,
            lastname:object.lastname,
            place:e.target.value
        })
        console.log(object.place)
    }

    
  return (
    <div className='x'>
        <form className='form'>
  <div className="mb-3">
    
    <input onChange={handlefirst} value={object.firstname||''} type="text" className="fo" aria-describedby="emailHelp" placeholder='firstname' name='firstname'/>
  </div>
  <div class="mb-3">
    <input onChange={handlelast} value={object.lastname||''} type="text" className="fo" placeholder='lastname' name='lastname'/>
  </div>
  <div class="mb-3">
    <input onChange={handleplace} value={object.place||''} type="text" className="fo" placeholder='place' name='place'/>
  </div>
  
  <button onClick={update} type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}
