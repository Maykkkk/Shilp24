import React from 'react'
import EmptyNote from '../components/EmptyNote'
import NavBar from '../components/NavBar'
import '../links/css/home.css'

const guests = ({setAuth, isAuth}) => {
  return (
    <div className='App'>
      <div className="body">
        <NavBar setAuth={setAuth} isAuth={isAuth} />
        <EmptyNote/>
      </div>
    </div>
  )
}

export default guests