import React from 'react'
import './Student.css'
import {Delete} from '@mui/icons-material'
import axios from 'axios'
import Popup from 'reactjs-popup';
import Pop from './Popup'
export default function Student(props) {

    const delet = ()=>{

            axios.delete('http://localhost:5000/students/'+props.id);
    }

  return (
    <div className='box'>

      
    <div className="edit">
    <Delete className='Delete'  onClick = {delet} />
    <Popup trigger={<button className='btn btn-primary'> Update </button>} 
     position='right center'>
         <Pop id={props.id} className='pop'/>
    </Popup>
    </div>
    <div>
      <span className="x">FirstName:</span><span className="y">{" "+props.firstname}</span>
      <br />
      <span className="x">LastName:</span><span className="y">{" "+props.lastname}</span>
      <br />
      <span className="x">Place:</span><span className="y">{" " +props.place}</span>
    </div>

    </div>
  )
}
