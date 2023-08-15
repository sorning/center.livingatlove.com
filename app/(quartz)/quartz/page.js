'use client'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { db } from '../../lib/firebase'
import { addDoc, collection, query, onSnapshot } from 'firebase/firestore'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const quartz = []

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [quartzItems, setQuartzItems] = useState([])
    const [quartzItemsImages, setQuartzItemsImages] = useState([])

    useEffect(() => {
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

    console.log('quartzItems', quartzItems[0])
    return (
        <div className="bg-white">
            {quartzItems.map((item, id) => {
                return (
                    <li key={id}>
                        
                        <div className="pt-6">
                            {/* Image gallery */}
                            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                
                               
                                <div className="sm: rounded sm:w-full  lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <img
                                        src={item.image1}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <img
                                        src={item.image2}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <img
                                        src={item.image3}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <img
                                        src={item.image4}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <img
                                        src={item.image5}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="sm: rounded aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                    <img
                                        src={item.image6}
                                        className="h-full w-full object-cover object-center"
                                    />
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
                                            <p className="text-base text-gray-900">Price:{item.Price}/Ton</p>
                                            <p className="text-base text-gray-900">Available Grade:{item.AvailableGrade}</p>
                                            <p className="text-base text-gray-900">Available Quantity{item.Quantity}</p>
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
