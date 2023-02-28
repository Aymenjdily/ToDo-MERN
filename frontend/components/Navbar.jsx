import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='py-8 bg-[#6C00FF]'>
        <div className='container mx-auto text-center'>
            <Link href='/'>
                <h1 className='text-white font-extrabold text-4xl underline underline-offset-4 decoration-[#F2DEBA]'>
                    To Do App
                </h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar