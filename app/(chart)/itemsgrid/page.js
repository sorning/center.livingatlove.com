'use client'

import Link from "next/link";
import { db } from "@/lib/firebase";
import { onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from "react";

export default function ItemsGrid() {
    const [aliWorkItems, setAliWorkItems] = useState()

    //read items from firestore
    useEffect(() => {
        const q = query(collection('aliItems'))
        const unsubscribe = onSnapshot(q, (querysnapshot) => {
            const itemsArray = []
            querysnapshot.forEach((doc) => {
                itemsArray.push({ ...doc.data(), id: doc.id })
            })
            setAliWorkItems(itemsArray)

            return () => unsubscribe()
        })
    }, [])


    return (
        <>
            <div className="bg-slate-900 space-y-4 p-4 sm:py-6 sm:px-8">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-slate-200">Items</h2>
                    <Link href='/' className="flex items-center bg-blue-500 rounded-md text-sm pl-2 pr-3 py-1 shadow-lg shadow-indigo-500/40">
                        <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
                            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                        </svg>
                        New
                    </Link>
                </div>
                <form className="group relative">
                    <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input
                        className="w-full rounded-md bg-slate-800 ring-1 ring-slate-800 py-2 pl-10 shadow-md shadow-slate-500/40 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
                        type="text"
                        placeholder="Filter Items..."
                    >
                    </input>
                </form>
            </div>
            <ul className="bg-slate-900 p-4 sm:px-8 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-slate-700 ring-1 ring-slate-600 shadow-sm">
                    <Link href='/' className="">
                        <div className="grid sm:grid-cols-2 items-center">
                            <div>
                                <div>
                                    <h1 className="text-slate-100 font-semibold group-hover:text-slate-300 py-1">Item.Title</h1>
                                </div>
                                <div>
                                    <p className="text-slate-100 font-semibold group-hover:text-slate-300 py-1">item.Description</p>
                                </div>
                            </div>
                            <div className="flex sm:justify-end">
                                <button className="py-1 bg-blue-500 rounded px-2 mt-2 hover:bg-purple-700 group-hover:bg-purple-900">Edit</button>
                            </div>

                        </div>
                    </Link>
                </li>
                <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-slate-700 ring-1 ring-slate-600 shadow-sm">
                    <Link href='/' className="">
                        <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                            <div>
                                <h1>Title</h1>
                            </div>
                            <div>

                            </div>
                        </div>
                    </Link>
                </li>
                <li className="flex">
                    <Link href='/' className="w-full flex flex-col items-center border-2 border-dashed rounded-md border-slate-300 text-sm text-slate-200 font-medium py-3 hover:border-blue-500 hover:border-solid hover:bg-slate-800 hover:text-blue-500 group ">
                        <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                        </svg>
                        New Item
                    </Link>
                </li>

            </ul>
        </>
    )
}