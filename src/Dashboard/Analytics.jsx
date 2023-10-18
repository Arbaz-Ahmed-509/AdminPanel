import {Grid, Stack, Typography, } from '@mui/material';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import '../App.css'

const AnalyticEcommerce = ({color, title, count, percentage, isLoss, image, backgroundColor}) => {
    return (
  <Stack  className='main-cards'>
      <div className='card'>
        <Stack direction={'row'}>
            <Stack>
              <div style={{ backgroundColor, borderRadius: '50%', height:'100px', width:'100px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={image} alt="" width='60px' height='60px'/></div>
            </Stack>

            <Stack sx={{display:'flex', justifyContent:'center',paddingLeft:'8px'}}>
              <Typography sx={{fontSize:'11px', color:'grey', lineHeight:'18px'}} >
                  {title}
              </Typography>
            <Grid item>
              <Typography sx={{fontSize:'20px', fontWeight:700, lineHeight:'20px'}}>
                ${count}
              </Typography>
            </Grid>
              <Stack direction={'row'} sx={{top:'10px'}}>         
                  <Typography>
                    {!isLoss && <RiseOutlined className='analytics_icon' rev={undefined} />}
                    {isLoss && <FallOutlined className='analytics_icon_loss' rev={undefined} />}
                  </Typography>
                  <Typography sx={{fontSize:'11px',lineHeight:'24px',paddingLeft:'4px', color:'black'}}><span style={{color, fontWeight:800}}>{` ${percentage}% `}</span>this month</Typography> 
              </Stack>
            </Stack>

        </Stack>
      </div>
  </Stack>
  )
}
export default AnalyticEcommerce;