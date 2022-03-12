import React from 'react'
import Footer from './Footer'
import Form from './Form'
import Navigation from './Navigation'
import Image from 'next/image'

const Auth = () => {
    return (
        <div className='bg-[#161616] relative overflow-hidden'>
            <Navigation />
            <Form />
            <Footer />
            <div className="absolute h-96 w-96 top-16 -right-32 -rotate-[123]">
                <Image className="object-contain" src='/vector3.png' alt="vector3" height='384px' width='384px' />
            </div>
            <div className="absolute h-96 w-96 top-16 -right-40 -rotate-[123]">
                <Image className="object-contain" src='/vector2.png' alt="vector2" height='384px' width='384px' />
            </div>
            <div className="absolute h-96 w-96 top-16 -right-48 -rotate-[123]">
                <Image className="object-contain" src='/vector1.png' alt="vector1" height='384px' width='384px' />
            </div>
        </div>
    )
}

export default Auth