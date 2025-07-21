import React from 'react'

const Button = ({title, className,onClick}) => {
  return (
    <>
        <button onClick={onClick} className={`btn ${className}`}>{title}</button>
    </>
  )
}

export default Button