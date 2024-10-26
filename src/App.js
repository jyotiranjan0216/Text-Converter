import React, { useState } from 'react'
import NavBar from './compoents/NavBar'
import TextForm from './compoents/TextForm'

const App = () => {
  const [mode, setMode] = useState('light');
  const handleDarkMode = () => {
    if(mode === 'light') setMode('dark');
    else setMode('light');
  }

  return (
    <>
      <div style={{ color: mode === 'dark'? 'white' : 'black', backgroundColor: mode === 'dark'? 'rgb(23, 18, 71)' : 'white',minHeight: '100vh', width: '100vw'  }}>
        <NavBar title = "TextUtils" mode= {mode} handleDarkMode= {handleDarkMode}/>
        <TextForm heading = "Enter the text here" mode = {mode}/>
        
      </div>
    </>
  )
}

export default App