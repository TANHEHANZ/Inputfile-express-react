import React from 'react'

const Input = ({valores}) => {
    console.log(valores)
  return (
    <div>
      <label htmlFor={valores.label}>{valores.label}</label>
      <input type={valores.type} name={valores.name} id={valores.id} />
    </div>
  )
}

export default Input
