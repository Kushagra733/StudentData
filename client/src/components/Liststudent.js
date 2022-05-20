import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import Student from './Student'
import './Liststudent.css'

export default function Liststudent() {

    const [array,setarr] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/').then((response)=>{
            setarr(response.data);

           
        })
       
    })


  return (

    

    <div className='list'>


        {
                array.map((item,key)=>
                { 
                    return(
                        <Student  id={item._id} firstname={item.firstname} lastname={item.lastname} place={item.place}/>
                )
                 
                 })
        }   
    

      
    </div>
  )
}
