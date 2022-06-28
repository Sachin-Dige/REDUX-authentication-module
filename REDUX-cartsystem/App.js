import React from 'react'
import "./Style.css"

import HomeContainer from './Containers/HomeContainer'
import NavbarContainer from './Containers/NavbarContainer'
import FooterContainer from './Containers/FooterContainer'


const App = () => {
  return (
    <div className='App'>
      <NavbarContainer/>
      <HomeContainer/>

    <FooterContainer/>
    </div>
  )
}

export default App
