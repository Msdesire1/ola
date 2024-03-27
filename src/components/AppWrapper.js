"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'

const AppWrapper = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false)

  const handleToggleIcon = () => {
    const newLightMode = !isLightMode;
    setIsLightMode(newLightMode);
    localStorage.setItem("isLightMode", JSON.stringify(newLightMode));

  }
  return (
    <div className={`${isLightMode ? "light-mode" : "dark-mode"}`}>
      <Navbar handleToggleIcon={handleToggleIcon}
        icon={isLightMode} />
      {children}
    </div>
  )
}

export default AppWrapper