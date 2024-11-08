import { useState } from 'react'
import Header from './comps/Header'
import { Avatar } from "@mui/material"
import profile from "./assets/profile.jpg"
import Intro from './comps/Intro'
import Main from './comps/Main'
// const avatarStyle = {
//   position: "absolute",
//   top: 350,
//   left: 250,
//   border: 4,
//   borderColor: "white",
//   height: 200,
//   width: 200,
//   boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
// }
function App() {
  const bg = "https://as1.ftcdn.net/v2/jpg/03/50/68/30/1000_F_350683074_SSaXPN4XBvmwEKWRG4aU18Kl7kwkOdrg.jpg"
  return (
    <div className="App">
      <Header />
      <img className='mt-[6.1rem] w-full' src={bg} alt="" />
      <div className='absolute md:left-[250px] right-1 md:top-[350px] top-[250px] border-4 border-white md:h-[200px] h-[150px] md:w-[200px] w-[150px] overflow-hidden rounded-full'>
          <img src={profile} alt="" />
      </div>
      <Intro />
      <Main />
    </div>
  )
}

export default App
