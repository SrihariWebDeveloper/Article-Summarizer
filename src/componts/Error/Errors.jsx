import React from 'react'

const Errors = ({message}) => {
  return (
    <div className="text-center">
      {message==null?<div className="">
        <h1>Serach Songs</h1>
      </div>:<div className="">
        <h1>Error Occured</h1>
      </div>}
    </div>
  )
}

export default Errors
