"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const{user,isSignedIn}=useUser();
  return (
    <div className='p-2.5 flex items-center justify-between border shadow-sm mb-10' >
        <div>
     <Image src="/expenses (1).png" alt="Expenses logo" width={50  } height={15}  />
     <span className='font-bold font-sans '>Expense Tracker</span>
     </div>
     {isSignedIn?<UserButton/>:(
     <Button>Get Started</Button>)
}
     

    </div>
  )
}

export default Header
