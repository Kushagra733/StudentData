import React from 'react'
import './Inputstudent.css'
import { useState } from 'react'
import axios from 'axios'

export default function Inputstudent() {


    


    const [object,setobj] = useState({
        firstname:'',
        lastname:'',
        place:''
    });

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

    const post = ()=>{
        axios.post('http://localhost:5000/students',object)
    }


  return (
    <div>

        <div className="heading"><h1>Student Information</h1></div>
      <form className='form'>
  <div className="mb-3">
    
    <input onChange={handlefirst} value={object.firstname||''} type="text" className="form-control" aria-describedby="emailHelp" placeholder='firstname' name='firstname'/>
  </div>
  <div class="mb-3">
    <input onChange={handlelast} value={object.lastname||''} type="text" className="form-control" placeholder='lastname' name='lastname'/>
  </div>
  <div class="mb-3">
    <input onChange={handleplace} value={object.place||''} type="text" className="form-control" placeholder='place' name='place'/>
  </div>
  
  <button onClick={post} type="submit" className="btn btn-primary" >Add</button>
</form>
    </div>
  )
}
