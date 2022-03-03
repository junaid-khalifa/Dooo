import React from 'react'
import Navigation from '../components/Signup/Navigation'
import Form from '../components/Signup/Form'
import Footer from '../components/Signup/Footer'

const Auth = () => {
    return (
        <div className=' bg-[#161616] md:h-[100vh]'>
            <Navigation />
            <Form />
            <Footer />
        </div>
    )
}

export default Auth