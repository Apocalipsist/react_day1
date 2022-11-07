import React from 'react'

export default function Button(props) {
  return (
    <button className={`btn btn-${props.color} w-100`}>+{props.step}</button>
  )
}
