import Link from "next/link"

export default function ModelModule() {
    return (
        <>
            <div>
                <ul className="bg-slate-900 p-4 sm:px-8 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-purple-700 ring-1 ring-slate-600 shadow-sm">
                            <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                                <div>
                                    <h1>Refund</h1>
                                </div>
                            </div> 
                    </li>
                    <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-blue-700 ring-1 ring-slate-600 shadow-sm">
                            <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                                <div>
                                    <h1>Review</h1>
                                </div>
                            </div> 
                    </li>
                    <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-cyan-500 ring-1 ring-slate-600 shadow-sm col-span-2">
                            <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                                <div>
                                    <h1>Fullfillment</h1>
                                </div>
                            </div> 
                    </li>
                    <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-green-700 ring-1 ring-slate-600 shadow-sm col-span-2">
                            <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                                <div>
                                    <h1>Order</h1>
                                </div>
                            </div> 
                    </li>
                    <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-yellow-500 ring-1 ring-slate-600 shadow-sm col-span-2">
                        {/* <div className=""> */}
                            <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                                <div>
                                    <h1>Statement</h1>
                                </div>
                            </div>
                        {/* </div> */}
                    </li>
                    <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-red-500 ring-1 ring-slate-600 shadow-sm">
                        <Link href='/modelmodule/products' className="">
                        <div>
                            <div className="grid sm:grid-cols-2 items-center">
                                <div>
                                    <div>
                                        <h1 className="text-slate-100 font-semibold group-hover:text-slate-300 py-1">Products</h1>
                                    </div>

                                </div>
                                {/* <div className="flex sm:justify-end">
                                <button
                                    // onClick={() => setOpen(true)}
                                    className="py-1 bg-blue-500 rounded px-2 mt-2 hover:bg-purple-700 group-hover:bg-purple-900">Edit</button>
                            </div> */}

                            </div>
                        </div>
                        </Link>

                    </li>
                    <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-orange-500 ring-1 ring-slate-600 shadow-sm">
                        <Link href='/modelmodule/adtraffic' className="">
                            <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                                <div>
                                    <h1>AD Traffic</h1>
                                </div>
                                <div>

                                </div>
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
    )
}