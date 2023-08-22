'use client'

import { createContext, useContext, useState } from "react"

const PopupContext=createContext()
export const PopupContextProvider=({children})=>{

    const [loading, setLoading]=useState(false)
    const [open, setOpen]=useState(false)

    const value={open,setOpen}
    return (
        <PopupContext.Provider value={value}>
            {!loading&&children}
        </PopupContext.Provider>
    )
}

export function usePopupContext() {
    return useContext(PopupContext)
}