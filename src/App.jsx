import { useState } from 'react'
import './App.css'
import CakeView from "./features/cake/CakeView"
import ChocolateView from './features/chocolate/ChocolateView'
import UserView from './features/user/UserView'
function App() {
  

  return (
    <div className="App">
      <CakeView />
      <ChocolateView />
      <UserView />
    </div>
  )
}

export default App
