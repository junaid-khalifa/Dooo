import React from 'react'
import Footer from './Footer'
import Form from './Form'
import Navigation from './Navigation'

const Auth = () => {
    return (
        <div className='bg-[#161616]'>
            <Navigation />
            <Form />
            <Footer />
        </div>
    )
}

export default Auth