'use client'

import { PopupContextProvider } from "./PopupContext"
import PopupModal from "./PopupModal"
import ItemsGrid from "./ItemsGrid"

export default function ItemsGridTest(){
    return (
        <>
            <PopupContextProvider>
                <ItemsGrid />
                <PopupModal />
            </PopupContextProvider>
        </>
    )
}