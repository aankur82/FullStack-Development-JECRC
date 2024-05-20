import React, { useContext } from 'react'
import { postContext } from './CreateContextFile'

function CompC() {
    let posts=useContext(postContext)
    console.log(posts)
  return (
    <div>CompC -{posts[0]?.title}</div>
  )
}

export default CompC