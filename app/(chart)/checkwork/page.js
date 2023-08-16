'use client'

import ChartRadar from "../radarchart/page"
import Todo from "../todo/page"


export default function CheckWork() {
    return (
        <>
            <div>
                {/* <div className="flex items-center justify-between h-2/4 w-1/2" > */}
                <div className="flex items-center justify-around" >
                    <div className="p-3"><ChartRadar /></div>
                    <div><Todo /></div>
                </div>
                
            </div>
        </>
    )
}