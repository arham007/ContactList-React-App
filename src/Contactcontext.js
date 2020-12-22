import React, { createContext, useReducer } from 'react';
import ContactReducer from './ContactReducer';

const data=[
    {id: 0 ,name:"Muhammad Arham Khan",email:"arhamkhancs99@gmail.com",phone:"03341020771"},
    {id: 1,name:"Muhammad Ali Khan",email:"alics99@gmail.com",phone:"03171070016"},
    {id: 2,name:"Muhammad Armash Khan",email:"armashkhancs99@gmail.com",phone:"03002348199"}
]

export const Contactcontext=createContext();

const ContactProvider=({children})=>{
    let [state,dispatch]=useReducer(ContactReducer,data);

    function addContact(contactObj){
        console.log(contactObj)
        dispatch({
            type:"Add_Contact",
            payload:{
                id:contactObj.id,
                name:contactObj.name,
                email:contactObj.email,
                phone:contactObj.phone
            }
        })

    }
    function deleteContact(id){
        console.log(id)
        dispatch({
            type:'Delete_Contact',
            payload:id

        })

    }

    return(
        <>
        <Contactcontext.Provider value={{
            data:state,
            addContact:addContact,
            deleteContact
        }}>
            {children}
        </Contactcontext.Provider>
        </>
    )

}

export default ContactProvider;

