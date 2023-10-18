import React, { useState, useEffect} from 'react'
import { Stack, Button,Typography, } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReactApexChart from 'react-apexcharts';

const barChartOptions = {
    chart: {
      type: "bar",
      height: 305,
      toolbar: {
        show: true,
      },
      tooltip:{
        show: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "65%",
        gap: '20px', // 
        borderRadius: 10,
        },
      },
  
    dataLabels: {
      enabled: true,
      
    },
    xaxis: {
        categories: [],
        axisBorder: {
            show: false
        } ,   
        min: 0, 
        max: 12, 
        bar: {
          width: '50px',
        },    
    },
    yaxis: {
      show: true,
      axisBorder: {
        show: true
      },
    },
    grid: {
      show:false
    }
  };
  
  const optionss = {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          background: 'white',
          labels:{
            labels:false,
            total:{
              show:true,
              showAlways:true,
            }
          }
        },
      },
    },
    dataLabels:{
      // enabled:true
    },
    legend: {
      show: true,
      position: 'bottom',
    } ,
  
  };
const seriess = [30, 20, 90];

const ChartsComponent = () => {
    const [chartWidth, setChartWidth] = useState(window.innerWidth > 576 ? 570 : 380);
    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState(barChartOptions);

    useEffect(() => {
        setSeries([
          {
            data: [90, 50, 20, 80, 60, 75, 30, 40, 85, 30, 55, 100],
            
          }
        ]);
        setOptions((prevState) => ({
          ...prevState,
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisBorder: {
              show: true,
            },  
            min: 0,
            max: 12,  
          },
          yaxis:{
            axisBorder:{
              show:true,
              margin:'0 10px 0 20px'
            },
            min: 0,
            max: 100, 
            padding:'10px'
          }
        }));

        const handleWindowResize = () => {
          setChartWidth(window.innerWidth > 576 ? 570 : 360);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    },[]);

  return (
    <div className='charts'>
             <div className='barChart'> 
                  <Stack className='barChart_head' direction={"row"} justifyContent={'space-between'} >
                    <Stack  spacing={1} >
                      <Typography sx={{fontWeight:800, fontSize:'18px', color:'#000000'}}>
                          Overview
                      </Typography>
                      <Typography sx={{fontSize:'14px',fontWeight:200, color:'grey',}} color="textSecondary" >
                        Monthly Earning
                      </Typography>
                    </Stack>
                    <Button className='barbtn' variant='outlined' sx={{color:'grey',  height: '30px', border:'1px solid grey','&:hover' :{border:'1px solid grey'}}}>Quarately <KeyboardArrowDownIcon /></Button>
                  </Stack>
                
                  <ReactApexChart options={options} series={series} type="bar"  width={chartWidth} height={340} />
            </div> 
            <div className='doNut'>
               <Typography sx={{fontSize:'18px', fontWeight:800, color:'#000000', paddingLeft:'15px'}}>Customers</Typography>
               <Typography sx={{fontSize:'14px',fontWeight:200, color:'grey', margin:'10px 0 20px 0',paddingLeft:'15px'}}>Customers that buy products</Typography>
               <div className='doNutChart'>
                  <ReactApexChart options={optionss} series={seriess} type="donut" width={250} height={270} /> 
                  <div className="center-text"><span style={{color:'#000000', fontWeight:800, fontSize:'20px'}}>65% </span> <br /> Total New Customers</div>
                </div>
             </div>
       </div>
  )
}

export default ChartsComponent
