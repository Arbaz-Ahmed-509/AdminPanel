import React from 'react'
import {Grid } from '@mui/material';
import { AnalyticsData } from './constant';
import AnalyticEcommerce from './Analytics';
import TableComponent from './Table';
import ChartsComponent from './Charts';

function Home() {

  return (
    <main className='main-container'>
        <div className='main-cards'>
            {
              AnalyticsData.map((data, index) => {
                console.log(data, 'data')
                const { title, count, percentage, extra, isLoss, color, image,backgroundColor} = data;
                  return(
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                      <AnalyticEcommerce 
                        title={title}
                        count={count}
                        percentage={percentage}
                        extra={extra}
                        isLoss={isLoss}
                        color={color}
                        image={image}
                        backgroundColor={backgroundColor}
                      />
                    </Grid>
                   )
               })
            }
        </div> 
        <ChartsComponent />
        <TableComponent />  
    </main>
  )
}
export default Home;
