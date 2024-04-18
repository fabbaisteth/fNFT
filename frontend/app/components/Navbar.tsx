

import Link from 'next/link';
import * as React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Navbar() {

    return (
        <>
            <div className="">
                <nav className="w-screen">
                    <ul className='flex items-end justify-between py-3 bg-transparent text-black pr-5'>
                        <li className='flex items-end ml-5 pb-2'>
                            <Link href="/">
                                <div className='inline-block text-xl ml-2'>
                                    Fund your Founder
                                </div>
                            </Link>
                        </li>
                        <li className='w-2/6'>
                            <ul className='flex justify-between font-bold mr-10 text-lg'>
                                <li className='border-b-2 hover:pb-0 p-2'>
                                    Marketplace
                                </li>
                                <li className='border-b-2 hover:pb-0 p-2'>
                                    List My Project
                                </li>
                                <li className='border-b-2 hover:pb-0 p-2'>
                                    Profile
                                </li>
                                <li>
                                    <ConnectButton label='Sign In' chainStatus='full' />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav >
            </div >
        </>
    );

}
