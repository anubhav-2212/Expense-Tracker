import React from 'react'
import Image from 'next/image'
import {  LayoutGrid, PiggyBank, ShieldCheck,ReceiptText } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

const SideNav = () => {
    const menuList=[
       { id:1,
        name:'Dashboard',
        icons:LayoutGrid
    },
    {
        id:2,
        name:'Analytics',
        icons:PiggyBank
    },
    {
        id:3,
        name:'Expenses',
        icons:ReceiptText
    },
    {
        id:2,
        name:'Upgrade',
        icons:ShieldCheck
    }
]
    
  return (
    <div className='h-screen p-2 border shadow-sm'>
        <Image src="/expenses (1).png" alt="Expenses logo" width={50  } height={15}  />
            <span className='font-bold font-sans '>Expense Tracker</span>
            <div className='mt-5'>

                {menuList.map((menu,index)=>(
                   
                    <h2  key={index} className='  flex gap-2 items-center text-gray-600 font-medium
                    p-5 cursor-pointer rounded-md
                    hover:text-primary hover:bg-blue-100'>
                        <menu.icons/>
                        {menu.name}</h2>
                ))}
            </div>
            <div className='fixed bottom-5 p-3 flex gap-3 items-center '>
                <UserButton/>
                Profile
            </div>
            
      
    </div>
  )
}

export default SideNav
