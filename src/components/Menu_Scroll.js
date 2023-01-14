// import React, { useState } from 'react'
import React, { useEffect, useState } from "react";
import doge from '../assets/doge.png'


export default function Menu() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className={`bg-slate-700 h-14 sticky ${visible ? 'top-0' : ''} `}>
      Some Company Name
    </div>
  )

}
