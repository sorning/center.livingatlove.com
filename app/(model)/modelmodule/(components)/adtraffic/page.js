'use client'

import Link from "next/link"
import { Switch } from "@headlessui/react"
import { useState, Fragment } from "react"

export default function ModelModuleAdTraffic() {
    const [enabled, setEnabled] = useState(false)
    return (
        <>
            <div>hi, i am Ad Traffic.</div>
            <ul>
                <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-orange-500 ring-1 ring-slate-600 shadow-sm">
                    <Link href='/modelmodule/adtraffic' className="">
                        <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                            <div>
                                <h1>AD Traffic</h1>
                            </div>
                            <input
                                type="checkbox"
                                placeholder="Check"
                            />
                        </div>
                    </Link>
                </li>
                <li className={`${enabled ? 'bg-slate-500' : 'bg-orange-500'} hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3  ring-1 ring-slate-600 shadow-sm`}>
                    {/* <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-orange-500 ring-1 ring-slate-600 shadow-sm"> */}
                    <Link href='/modelmodule/adtraffic' className="">
                        <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                            <div>
                                <h1>AD Traffic</h1>
                                <Switch
                                    checked={enabled}
                                    // onChange={setEnabled}
                                    onChange={() => { alert('hi'); setEnabled(!enabled) }}
                                    className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                                >
                                    <span className="sr-only">Enable notifications</span>
                                    <span
                                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className={`${enabled ? 'bg-slate-500' : 'bg-orange-500'} hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3  ring-1 ring-slate-600 shadow-sm`}>
                    {/* <li className="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-orange-500 ring-1 ring-slate-600 shadow-sm"> */}
                    <Link href='/modelmodule/adtraffic' className="">
                        <div className="grid grid-cols-2 grid-rows-2 items-center sm:block ">
                            <div>
                                <h1>AD Traffic</h1>
                                <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
                                    {({ checked }) => (
                                        /* Use the `checked` state to conditionally style the button. */
                                        <button
                                            className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                            <span className="sr-only">Enable notifications</span>
                                            <span
                                                className={`${enabled ? 'translate-x-6 bg-green-300' : 'translate-x-1 bg-red-300'
                                                    } inline-block h-4 w-4 transform rounded-full  transition`}
                                            />
                                        </button>
                                    )}
                                </Switch>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </>
    )
}