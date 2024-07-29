import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

 const Header = () => {

    const headerMenu =[{

        id:1,
        name:'Ride',
        icon:'/taxi.jpg'

    },
{
    id:1,
    name:'Package',
    icon:'/box.png'
}]

  return (
    <div className=' p-2 pb-2 pl-10 border-b-4 border-slate-400 flex items-center justify-between'>
        <div className='flex gap-24 items-center'>
           <Image src='/uber.png' height='70' width='70'/>
           <div className='flex gap-6 items-center'>
           {headerMenu.map((item) => (
                        <div key={item.id} className='flex gap-2 items-center'>
                            <Image src={item.icon} alt={item.name} width={17} height={17} />
                            <h2>{item.name}</h2>
                        </div>
                    ))}
            </div> 
        </div>
       
        <UserButton></UserButton>
    </div>
  )
}
export default Header
