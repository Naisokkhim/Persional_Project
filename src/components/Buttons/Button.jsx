import React from 'react'
import '../../assets/style/Button.css'
export default function Button({
    onClick,
    children,
    className='',
    type= 'button',
    disabled=false,
}) {
    
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
    >
      {children}
    </button>
  )
}
