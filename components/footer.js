import Head from 'next/head'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
        <div className="flex flex-row justify-center bg-gold w-screen border-t-2 border-yellow-800">
            <div className="w-screen bg-yellow-700 bg-opacity-70">
                <h1 className="font-display text-center text-2xl lg:text-6xl p-2 pt-10 m-2 bg-clip-text text-transparent bg-gold2"> Der Wunderkammer </h1>
                <h2 className="font-display text-center text-xl lg:text-2xl p-2 m-2 text-black opacity-60">curiously timeless.</h2>
            </div>
        </div>
    </div>
  )
}
