import React from 'react'
import {Bar, Line} from 'react-chartjs-2'
import {
     Chart as chartjs,
     LineElement,
     CategoryScale, 
     BarElement,
     LinearScale,
     PointElement,
     Legend
} from 'chart.js';
import ChartHeader from './ChartHeader';
chartjs.register(
    LineElement,
    BarElement,
     CategoryScale, 
     LinearScale,
     PointElement,
     Legend

)

const LineChart = () => {
   
    const state = {
      labels: ['labels','labels','labels','labels'],
      datasets: [{
        label: 'My First Dataset',
        data: [40, 67, 80, 89],
        backgroundColor: [
        '#ffc981'
        ],
        borderColor: [
            '#ffc981'
        ],
        border:'none',
        borderCapStyle:'butt',
        type:'line',
        tension:0.4
      },{
        label: 'My second Dataset',
        data: [  10,12,0,5],
        backgroundColor: [
           ' #8bc682'
        ],
    
        

        type:'bar',
        
      },{
        label: 'My third Dataset',
        data: [ 0,20,4,10],
        backgroundColor: [
            '#ea5b5a'
        ],
        
        
        borderWidth: 1,
        type:'bar',
        
      },{
        label: 'My fourth Dataset',
        data: [ 4,0,20,10],
        backgroundColor: [
          '  #1f7fc6'
        ],
       
        borderWidth: 1,
        type:'bar',
        
      }]
    };

            const options={
                plugins:{
                    legend:true
                },
                scales:{
                    y:{
                        // min:3,
                        // max:6
                    }
                }
            }


    
  return (

    <div>
        <ChartHeader/>
        
        <div style={{width:'60rem',height:'50rem',marginLeft:'10rem'}}>
      
        <Bar data={state} options={options}>
            </Bar></div>
    </div>
  )
}

export default LineChart