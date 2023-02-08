import React, { useEffect, useState } from 'react'
// import './Nav.css';
import './Nav.css'

const Nav = () => {
    const [show, setshow] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll', () => {
        transitionNavbar()
      });
      return window.removeEventListener('scroll', () =>{
        transitionNavbar()
      })
    }, [])
    
    const transitionNavbar = ()=>{
        if (window.scrollY > 300){
            setshow(true);
        }else{
            setshow(false);
        }
    }
  return (
    <div className={`${show ? "nav_black" : "nav"}`}>
        <div className='nav_contents'>
            <img className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>
    </div>
  )
}

export default Nav