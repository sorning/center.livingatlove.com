'use client'

import { useRef, useState } from "react"
import {db} from '../../lib/firebase'


export default function Todo(){
    const [items, setItems]=useState([
        {name: 'coffe', price:'1'},
        {name: 'tea', price: '2'}
    ])

    const inputRef1=useRef('')
    const inputRef2=useRef('')

    // const [newItem, setNewItem]=useState({name:'',price:''})
    const [total, setTotal]=useState(0)

    //add item to database
    // const addItem=async (e)=>{
    //     e.preventDefault();
    //     if (inputRef1.current!=''&&inputRef2.current!=''){
    //         await addDoc()
    //     }
    // }

    return (
        <>
            <main className="flex justify-between flex-col items-center sm:p-24 p-4">
                <div className="z-10 items-center justify-between font-mono text-sm max-w-5xl">
                    <h1 className="text-4xl text-center p-4">Todo</h1>
                </div>
                <div className="bg-slate-800 p-4 rounded">
                    <form className="grid grid-cols-6 items-center text-black">
                        <input 
                        ref={inputRef1}
                        className="col-span-3 border p-3"
                        type="text"
                        ></input>
                        <input
                        ref={inputRef2}
                        className="col-span-2 border mx-3 p-3"
                        type="text"
                        ></input>
                        <button
                        className="bg-slate-950 p-3 text-white text-xl"
                        >+</button>
                    </form>
                    <ul>
                        {items.map((item,id)=>(
                            <li key={id} className="flex justify-between w-full my-4 bg-slate-950">
                                <div className="flex justify-between w-full p-4">
                                    <span className="capitalize">{item.name}</span>
                                    <span>${item.price.trim()}</span>
                                    <button className="border-l-2 border-slate-900 w-16 hover:bg-slate-900">Edit</button>
                                    <button className="border-l-2 border-slate-900 w-16 hover:bg-slate-900">X</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}