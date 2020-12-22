
const ContactReducer=(state,action)=>{
    switch(action.type){
       
        case 'Delete_Contact':
         
           
             let arr=state.filter((contact)=>contact.id != action.payload)
             
            return arr
        case 'Add_Contact':
            return [...state,action.payload]
                
            
            
            
            
        default:
            return state
    }

}

export default ContactReducer;