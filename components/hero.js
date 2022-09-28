import Head from 'next/head'
import Image from 'next/image'
import amethyst from '../public/amethyst.png'

export default function Hero() {
  return (
    <div className="flex flex-row justify-center bg-black w-screen text-white text-center">
        <h1 className="font-bold text-center text-lg lg:text-xl p-2 m-2">🌙✨ Recent Acquisitions ✨🌙</h1>
        <Image src={amethyst} height="200" width="200" className="rounded-full" />
    </div>
  )
}
