import React from 'react'

const MyHeading = ({text,color}) => {
  return (
     <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-${color}`}>{text}</h2>
        <div className={`h-1 w-24 bg-orange-400 mx-auto rounded`}></div>
      </div>
  )
} 

export default MyHeading