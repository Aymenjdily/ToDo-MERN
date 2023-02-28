import React from 'react'

const Footer = () => {
    const date = new Date()
    const getYear = date.getFullYear()

    return (
        <footer className='bg-[#6C00FF] py-8'>
            <div className='container mx-auto text-center'>
                <p className='text-white font-bold'>
                    FullStack Mern Application - To do @aymenjdily - {getYear}
                </p>
            </div>
        </footer>
    )
}

export default Footer