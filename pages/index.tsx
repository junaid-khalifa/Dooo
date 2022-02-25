import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center hover:bg-slate-50">
      <h1 className='text-3xl m-2 font-bold underline cursor-pointer'>Hello Next JS</h1>
    </div>
  )
}

export default Home
