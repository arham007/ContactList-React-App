import React from 'react';
// import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contact from './Contact';
import Header from './Header';
import ContactProvider from "./Contactcontext.js";
import { v4 as uuidv4 } from 'uuid'

function App() {
  return (
    <>
    <ContactProvider>
    <Header />

    <Contact />
    </ContactProvider>
    </>
  )
}

export default App;
