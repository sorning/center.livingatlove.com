'use client'

import Script from "next/script"
import { useRef, useEffect, useState } from "react"

export default function ChartRadar() {
    const chartRef = useRef()
    const [datasetsData1, setDatasetsData1] = useState([60, 59, 90, 81, 56, 55, 40])
    const [datasetsData2, setDatasetsData2] = useState([28, 48, 40, 19, 96, 27, 100])

    const configData = {
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
            borderColor: 'rgba(255, 99, 132,0.2)',
            pointBackgroundColor: 'rgba(255, 99, 132,0.2)',
            pointBorderColor: 'rgba(255, 99, 132,0.2)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'My Second Dataset',
            data: datasetsData2,
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235,0.2)',
            pointBackgroundColor: 'rgba(54, 162, 235,0.2)',
            pointBorderColor: 'rgba(54, 162, 235,0.2)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    };

    const handleOnLoad = async () => {
        try {
            await new Chart(chartRef.current, config)
        } catch { console.log("error") }
    }
    //useeffect to re-render handleonload when data change. the reason that we don't useeffect on chart() is that chart is not defined on react, it is called from chart.js cdn. 
    useEffect(() => {
        handleOnLoad()
    }, [datasetsData1, datasetsData2])

    const config = {
        type: 'radar',
        data: configData,
        options: {
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
    }

    return (
        <>
            <div className="flex items-center justify-between h-2/4 w-1/2">
                <canvas 
                className="flex items-center justify-between h-2/4 w-1/2"
                ref={chartRef} />
                <Script
                    src="https://cdn.jsdelivr.net/npm/chart.js"
                    onLoad={handleOnLoad}
                />
                <p>hi, i am from dev.</p>
            </div>
        </>
    )
}