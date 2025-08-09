import React from 'react'
import flightMap from '../../../../assets/flightmap.png'

function ImgLeft() {
  return (
    <div>
       <div className=" mt-10 w-full">
        <img
          src={flightMap}
          alt="Flight Route"
          className="w-full max-h-52 object-contain rounded-md"
        />
      </div>
    </div>
  )
}

export default ImgLeft
