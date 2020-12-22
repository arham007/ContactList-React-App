
import React, { useContext, useState } from 'react';
import './index.css'
import {Button,Modal} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import {Contactcontext} from './Contactcontext';



const Header=()=>{
    let {addContact}=useContext(Contactcontext)
    // console.log(addContact)
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setPhone]=useState("");
    let [flag,setFlag]=useState(false)
    const handledChange=()=>{
        setFlag(!flag)
    }

    const submitChange=(e)=>{
        e.preventDefault();
        addContact({
            id: uuidv4(),
            name:name,
            email:email,
            phone:phone
        })
       
        setName("")
        setEmail("")
        setPhone("")
        setFlag(false)


    }
    return(

        <>
            {/* <Button className="btn-success">Add contact</Button>
            <Modal></Modal> */}
            <div className="container-fluid d-flex justify-content-around  bg-primary">
                <div >
                    <h1 style={{fontFamily: "'Righteous', cursive"}}>Contact App</h1>

                </div>
                <div className="mt-2">
                    <button className="btn btn-success" onClick={handledChange}>Add Contact</button>
                    <Modal show={flag}>
                        <Modal.Header>
                            <h2 className="ml-5" style={{fontFamily: "'Righteous', cursive"}}>Add to Contact</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={submitChange}>
                                <div className="form-group">
                                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" placeholder="Enter your Name" />

                                </div>
                                <div className="form-group">
                                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" placeholder="Enter your Email" />

                                </div>
                                <div className="form-group">
                                    <input type="tel" onChange={(e)=>{setPhone(e.target.value)}} className="form-control" placeholder="Enter your Phone number" />

                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control bg-danger text-white" />

                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handledChange}>
                                close
                            </Button>
                        </Modal.Footer>

                    </Modal>

                  </div>  
              
                

            </div>
             
        </>
    )
}

export default Header;