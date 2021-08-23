import React from 'react'
import { Image } from 'react-bootstrap'

const Platform = (props) => {
  return (
    <div className="plfrm">
      <Image src={props.image} /> {props.text}
    </div>
  )
}

export default Platform
