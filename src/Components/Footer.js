import React from 'react'

export const Footer = () => {
  let footerStyle={
    position:"fixed",
    width:"100%",
    top:"96.5vh",
  }
  return (
    <footer className='text-center text-light bg-dark' style={footerStyle}>
      Copyright &copy; My Todos List
    </footer>
 )
}
