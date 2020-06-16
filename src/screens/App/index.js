import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Content from './Content'
import TopNavigation from './TopNavigation'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <TopNavigation />
        <Content />
      </>
    </BrowserRouter>
  )
}

export default App
