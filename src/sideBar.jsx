import React from 'react'
import{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsListCheck,
BsMenuButtonWideFill, BsFillGearFill}from 'react-icons/bs'
import { Stack,Typography, } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpIcon from '@mui/icons-material/Help';

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
   
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsGrid1X2Fill  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard <span style={{marginLeft:'80px'}}>{'>'}</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products <span style={{marginLeft:'97px'}}>{'>'}</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers <span style={{marginLeft:'80px'}}>{'>'}</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Income <span style={{marginLeft:'106px'}}>{'>'}</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Promote <span style={{marginLeft:'98px'}}>{'>'}</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <HelpIcon className='icon'/> Help <span style={{marginLeft:'122px'}}>{'>'}</span>
                </a>
            </li>
        </ul>
        <li className='sidebar-bottom'>
            <Stack direction={'row'}>
            <img src='images/logo.jpg' alt='' width='45px' height='45px' />
            <Stack sx={{marginLeft:'8px'}}>
                <Typography sx={{fontSize:'14px', fontWeight:600, color:'white'}}>Evon</Typography>
                <Typography sx={{fontSize:'14px',color:'grey'}}>Project Manager</Typography>
            </Stack>
                <KeyboardArrowDownIcon sx={{margin:'9px 10px 0 32px', color:'grey'}}/>
            </Stack>
        </li>
    </aside>
  
  )
}

export default Sidebar