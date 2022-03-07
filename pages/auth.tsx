import React from 'react'
import Navigation from '../components/User/Signup/Navigation'
import Form from '../components/User/Signup/Form'
import Footer from '../components/User/Signup/Footer'

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