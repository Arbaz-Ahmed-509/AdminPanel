import { useState } from "react"
import Sidebar from "./sideBar"
import Home from "./Dashboard/Home"
import Header from "./Header"
import './App.css'

const App = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
  </div>
  );
}

export default App;
