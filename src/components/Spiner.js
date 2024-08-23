import React from 'react'
import loading from '../loading.gif'
function Spiner() {
  return (
    <div className='text-center'>
      <img className='my-3' style={{height:'200px',width:'200px'}} src={loading} alt="loading" />
      </div>
  )
}

export default Spiner