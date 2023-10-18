import React, {useState} from 'react'
import {tableData } from './constant';
import SearchIcon from '@mui/icons-material/Search';
import { Stack, Button,Typography, Table, TableHead, TableRow, TableCell,InputAdornment, TextField, TableBody } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TableComponent = () => {

    const [search, setSearch] = useState('')

  return (
    <div className='main-table'>
          <Stack direction={'row'} sx={{justifyContent:'space-between', marginBottom:'30px'}}>
            <Typography sx={{fontSize:'20px', fontWeight:500, color:'#000000',marginLeft:'10px'}}>Product Sell</Typography>
            <Stack direction={'row'} sx={{marginRight:'20px'}} spacing={6}>
              <TextField
                  className='searchFieldTable'
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
            <Button className='tablebtn' variant='outlined' sx={{color:'grey', border:'1px solid grey',}}>Last 30 days  <KeyboardArrowDownIcon /></Button>
            </Stack>
          </Stack>
            <Table >
              <TableHead >
                <TableRow >
                  <TableCell sx={{color:'grey'}}>Product Name</TableCell>
                  <TableCell sx={{color:'grey'}}>Stock</TableCell>
                  <TableCell sx={{color:'grey'}}>Price</TableCell>
                  <TableCell sx={{color:'grey'}}>Total Cell</TableCell>
                </TableRow>
                
              </TableHead>
              <TableBody >
                {
                  tableData.map((data, index)=> {
                    return(
                      <TableRow key={index} >
                        <TableCell>
                          <Stack direction={'row'}>
                            <img src={data.image} alt='' width='45px' height='45px' />
                            <Stack sx={{marginLeft:'8px'}}>
                              <Typography sx={{fontSize:'14px', fontWeight:600,}}>{data.name}</Typography>
                              <Typography sx={{fontSize:'14px',color:'grey'}}>{data.des}</Typography>
                            </Stack>
                          </Stack>
                        </TableCell>
                        <TableCell sx={{color:'grey'}}>{data.stock}</TableCell>
                        <TableCell sx={{fontWeight:400}}>{data.price}</TableCell>
                        <TableCell sx={{color:'grey'}}>{data.totalSale}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
        </div>
  )
}
export default TableComponent;
