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
      labels: ['labels','labels','labels','labels','labels'],
      datasets: [{
        label: 'My First Dataset',
        data: [40, 67, 80, 81, 56, 55, 40],
        backgroundColor: [
        'black'
        ],
        borderColor: [
         'black'
        ],
        borderWidth: 3,
        type:'line',
        tension:0.4
      },{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'red','blue'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        type:'bar',
        
      }]
    };
//     const dataLine={
//         labels:['monday','tuesday','thursday'],
//         datasets:[
//             {
//                 label:'Support Balance',
//                 data:[6,3,9 ],
//                 backgroundColor:'orange',
//                 borderColor:'black',
//                 pointBorderColor:'aqua',
//                 fill:true,
//                 tension:0.4,   } ,
//             {
//                 label:'Support added',
//                 data:[6,3,9 ],
//                 backgroundColor:'green',
//                 borderColor:'black',
//                 pointBorderColor:'aqua',
//                 fill:true,
//                 tension:0.4, 
//             } , {
//                 label:'Support Used',
//                 data:[6,3,9 ],
//                 backgroundColor:'red',
//                 borderColor:'black',
//                 pointBorderColor:'aqua',
//                 fill:true,
//                 tension:0.4, 
//             }  , {
//                 label:'Warranty Used',
//                 data:[6,3,9 ],
//                 backgroundColor:'blue',
//                 borderColor:'black',
//                 pointBorderColor:'aqua',
//                 fill:true,
//                 tension:0.4, 
//             }        ]    }
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
        {/* <Line data={dataLine}
        options={options}>
        </Line> */}
        <Bar data={state} options={options}>
            </Bar></div>
    </div>
  )
}

export default LineChart