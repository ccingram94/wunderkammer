import Head from 'next/head'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
        <div className="bg-yellow-700 w-screen">
            <p className="text-center font-display p-2 text-yellow-900">“A man sees in the world what he carries in his heart.” - Goethe </p>
        </div>
        <div className="flex flex-row justify-center bg-gold w-screen">
            <div className="w-screen bg-yellow-700 bg-opacity-70">
                <h1 className="font-display text-center text-2xl lg:text-6xl p-2 m-2 bg-clip-text text-transparent bg-gold2">✨ Der Wunderkammer ✨</h1>
            </div>
        </div>
    </div>
  )
}
