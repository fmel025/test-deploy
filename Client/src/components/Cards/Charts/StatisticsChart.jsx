import React from "react";
import {Line, Chart} from 'react-chartjs-2'
import {
    Chart as chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js'

chartjs.register (
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
)

const StatisticsChart = () => {
    const data = {
        labels: ['10:00','12:00','2:00','4:00','6:00','8:00','10:00'],
        datasets:[{
            label: 'Tickets canjeados',
            data: [8,20,42,33,37,22,16],
            backgroundColor: 'main',
            borderColor: 'black',
            tension :0.4
            }
        ]
    }

const options = {
    plugiins: {
        legend: true
    },
    scales: {
        y: {
            min: 0,
            max: 100
        }
    }
}

    return(
        <div className="ml-10 w-4/5 flex flex-col items-center">
        <h1 className="font-bold text-xl text-main text-center">Cantidad de tickets canjeados por hora</h1>
            <Line 
                data={data} options={options}> 
            </Line>
        </div>
    );
};

export default StatisticsChart