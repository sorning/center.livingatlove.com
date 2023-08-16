'use client'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { db } from '../../../lib/firebase'
import { addDoc, collection, query, onSnapshot, collectionGroup } from 'firebase/firestore'
import Image from 'next/image'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [quartzItems, setQuartzItems] = useState([])

    useEffect(() => {
        // const q = query(collection(db, 'quartz','X48linRylkYIqaioapKD','Images'))
        // const q=query(collectionGroup(db,'Images'))
        const q = query(collection(db, 'quartz'))
        const unsubscribe = onSnapshot(q, (querysnapshot) => {
            const itemsArray = []
            querysnapshot.forEach((doc) => {
                itemsArray.push({ ...doc.data(), id: doc.id })
            })
            setQuartzItems(itemsArray)
            return () => unsubscribe()
        })
    }, [])

    console.log('quartzItems', quartzItems)
    return (
        <div className="bg-white">
            <div className='flex items-center justify-center w-full'>
            <h1 className=" p-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Quartz Material Collection</h1>
            </div>
            
            {quartzItems.map((item, id) => {
                return (
                    <li key={id}>
                        
                        <div className="pt-1">
                            {/* Image gallery */}
                            <div className="mx-auto mt-1 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                
                                <div className="sm: rounded sm:w-full  lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <Image
                                        src={item.image1}
                                        width={1500}
                                        height={1500}
                                        alt=''
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <Image
                                        src={item.image2}
                                        width={1500}
                                        height={1500}
                                        alt=''
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <Image
                                        src={item.image3}
                                        width={1500}
                                        height={1500}
                                        alt=''
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    {item.image4&&<Image
                                        src={item.image4}
                                        width={1500}
                                        height={1500}
                                        alt=''
                                        className="h-full w-full object-cover object-center"
                                    />}
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    {item.image5&&<Image
                                        src={item.image5}
                                        width={1500}
                                        height={1500}
                                        alt=''
                                        className="h-full w-full object-cover object-center"
                                    />}
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    {item.image6&&<Image
                                        src={item.image6}
                                        width={1500}
                                        height={1500}
                                        alt=''
                                        className="h-full w-full object-cover object-center"
                                    />}
                                </div>
                            </div>

                            {/* Product info */}
                            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Material Code:{item.MaterialCode}</h1>
                                </div>

                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                    {/* Description and details */}
                                    <div>
                                        <h3 className="sr-only text-black">Info</h3>
                                        <div className="space-y-1">
                                            <p className="text-base text-gray-900">Price:{item.Price}$/Ton</p>
                                            <p className="text-base text-gray-900">Available Grade:{item.AvailableGrade}</p>
                                            <p className="text-base text-gray-900">Available Quantity:{item.Quantity}</p>
                                            <p className="text-base text-gray-900">Trader: {item.Trader}</p>
                                            <p className="text-base text-gray-900">Place of Origin: {item.PlaceOfOrigin}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })}

        </div>
    )
}
