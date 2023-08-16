'use client'

import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import {onSnapshot, collection, collectionGroup, query} from 'firebase/firestore'

export default function RadarChartReact() {
    //read data from firestore
    const [datasetsData1, setDatasetsData1] = useState([80, 80, 80, 80, 80, 80, 80])
    const [datasetsData2, setDatasetsData2] = useState([75, 48, 40, 19, 96, 27, 100])
    const [datasetsData22, setDatasetsData22] = useState([75, 48, 40, 19, 96, 27, 100])

    useEffect(()=>{
        const q=query(collection(db,'radarItems'))
        const unsubscribe=onSnapshot(q,(querysnapshot)=>{
            const itemsArray=[]
            querysnapshot.forEach((doc)=>{
                itemsArray.push({...doc.data(),id:doc.id})
            })
            console.log(itemsArray[0].DayData,itemsArray[0].myData)
            setDatasetsData22(itemsArray[0].myData)
            console.log(datasetsData2)
        })
        
        return ()=>unsubscribe()
    },[])

const data = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: datasetsData1,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgb(255, 99, 132,0.2)',
        pointBorderColor: 'rgb(255,255,255,0.2)',
        pointHoverBackgroundColor: 'rgb(255,255,255,0.8)',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'My Second Dataset',
        // data: [28, 48, 40, 19, 96, 27, 100],
        data:datasetsData22,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235,0.2)',
        pointBackgroundColor: 'rgb(54, 162, 235,0.2)',
        pointBorderColor: 'rgb(255,255,255,0.2)',
        pointHoverBackgroundColor: 'rgb(255,255,255,0.8)',
        pointHoverBorderColor: 'rgb(54, 162, 235,0.8)'
    }]
};

const options = {
    elements: {
        line: {
            borderWidth: 3,
        }
    },
    scales: {
        r: {
            angleLines: {
                color: 'rgba(54, 162, 235, 0.1)',
            },
            grid: {
                color: 'rgba(54, 162, 235, 0.1)',
            },
            ticks: {
                color: 'rgba(54, 162, 235, 0.3)',
                backdropColor: 'rgba(54, 162, 235, 0.05)',
                display: true,
                fontColor: 'purple',
                fontSize: 10,
            }
        }
    }
}

    return <Radar data={data} options={options} />;
}

