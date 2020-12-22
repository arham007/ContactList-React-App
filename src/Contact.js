import React, { useContext } from 'react';
import {Contactcontext} from './Contactcontext';


const Contact=()=>{
  let {data,deleteContact}=useContext(Contactcontext)
  console.log(data)
//   console.log(addContact)

    return(
        <>
       

        <div className="container">

        
        <table className="table">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                
            </thead>
            <tbody>
            {data.map((list ,index)=>{
                return(
                    <>
                     <tr key={index}>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.phone}</td>
                    <td><button className="btn btn-danger" onClick={()=>deleteContact(list.id)}>Delete</button></td>
                </tr>   
                    
                    </>
                )
                
                
            })}
                
            </tbody>
        </table>
        </div>
    
        </>
    )
}


export default Contact;