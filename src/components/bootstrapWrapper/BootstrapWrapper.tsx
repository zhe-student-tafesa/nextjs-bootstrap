'use client'
import React, { useEffect } from 'react'

const BootstrapWrapper = () => {
    // when component is mounted
    useEffect(()=>{
        // @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.js")
    },[]);
  return (
    <div>BootstrapWrapper</div>
  )
}

export default BootstrapWrapper