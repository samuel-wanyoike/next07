import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='bg-slate-700 text-center h-screen justify-center'>
        <h1 className='font-bold text-3xl'>Hello World</h1>
      </div>
    </main>
  )
}
