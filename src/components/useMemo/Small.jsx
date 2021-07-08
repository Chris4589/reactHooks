import React, { memo } from 'react'

export const Small = memo(({value}) => {
  console.log('object');
  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
})
