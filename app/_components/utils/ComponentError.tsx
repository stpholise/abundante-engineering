import React from 'react'

const ComponentError = ({err} : {err: Error}) => {
  return (
    <div>
        {err.message} 
    </div>
  )
}

export default ComponentError