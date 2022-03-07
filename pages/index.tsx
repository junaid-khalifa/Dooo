import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center gap-4 items-center h-48">
      <Link href='/home' passHref><button className='bg-slate-700 rounded-md py-2 px-8 text-white'>User</button></Link>
      <Link href='/home' passHref><button className='bg-slate-700 rounded-md py-2 px-8 text-white'>Admin</button></Link>
    </div>
  )
}

export default Home
