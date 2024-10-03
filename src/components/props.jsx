import React from 'react'

const props = ({text,color}) => {
  return (

      <button className={`px-3 py-2 m-4 ${color} text-white rounded-md text-xs`}>{text}</button>

  )
}

export default props
