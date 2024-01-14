import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>
      not found
      <Link href='/'>return to home</Link>
    </div>
  )
}

export default NotFound
