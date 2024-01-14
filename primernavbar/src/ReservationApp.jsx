import React, { useState } from 'react'
import Reservation from './Reservation'
import './App.css'


function ReservationApp() {
    const [count, setCount] = useState(0)
    
  
    return (
        <>
            <Reservation/>
        </>
    )
  }
  
  export default ReservationApp;
  