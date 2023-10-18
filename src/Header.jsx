import { InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import 
 { BsJustify}
 from 'react-icons/bs'
import SearchIcon from '@mui/icons-material/Search';

function Header({OpenSidebar}) {

  const [search, setSearch] = useState('')

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <Stack direction={'row'} className='serachField'>
          <Stack direction={'row'}>
              <Typography className='header-text' sx={{fontWeight:700, fontSize:'16px', paddingRight:'10px'}}>Hello Shahrukh</Typography>
              {/* <img className='header-img' src="images/ss.png" alt="" width='20px' height='20px' /> */}
              <span className="clap-icon" role="img" >👏</span>
          </Stack>
          <Stack>
            <TextField
              className='searchBar_Header'
              value={search}
              onChange={e => setSearch( e.target.value)}
              placeholder='Search...'
              width='200px'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: 'grey', fontSize: '20px' }}/>
                  </InputAdornment>
                ),
                style: { height: '35px' ,fontSize:'13px'},
                 className:'searchbar' 
              }}
            />
          </Stack>
        </Stack>
    </header>
  )
}

export default Header