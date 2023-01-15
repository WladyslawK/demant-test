import React from 'react'
import './App.css'
import {Navbar} from "../components/navbar/Navbar"
import Test from "../components/test";
import {Button} from "../components/button/Button";

function App() {
  return (
    <>
      <Navbar/>
      <Button size={'big'} buttonStyle={'primary'}>Get Started</Button>
    </>
  )
}

export default App
