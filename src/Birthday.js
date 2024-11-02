import React from 'react'

const Birthday = ({imageUrl,ind,wishesProps}) => {
  return (
    <div key={ind}>
          <img src={imageUrl} alt="Faield to load image" />
          <p>{wishesProps}</p>
        </div>
  )
}

export default Birthday
