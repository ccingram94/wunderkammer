import Head from 'next/head'
import Image from 'next/image'
import { ShareIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div>
        <div className="bg-yellow-800 w-screen">
            <p className="text-center font-display p-2 text-yellow-900 text-sm lg:text-lg">“A man sees in the world what he carries in his heart.” - Goethe </p>
        </div>
        <div className="flex flex-row justify-center bg-gold w-screen border-b-2 border-yellow-800">
            <div className="w-full bg-yellow-700 bg-opacity-70 flex flex-row flex-wrap justify-between p-4">
              <div className="w-1/4 lg:m-2 p-2 flex justify-center content-center items-center">
                <h1 className="text-center font-display text-2xl lg:text-6xl p-2 bg-clip-text text-transparent bg-gold2">✨W✨</h1>
              </div>
              <div className="w-1/4 lg:m-2 p-2 flex flex-col justify-center content-center items-center">
                <h1 className="font-display text-center text-2xl lg:text-6xl p-2 bg-clip-text text-transparent bg-gold2"> Der Wunderkammer </h1>
                <h1 className="font-display text-center text-sm lg:text-lg opacity-60"> curiously timeless </h1>
              </div>
              <div className="w-1/4 lg:m-2 p-2 flex justify-center content-center items-center">
                <ShoppingCartIcon className='text-black h-6 w-6 lg:h-16 lg:w-16 opacity-80' />
              </div>
            </div>
        </div>
    </div>
  )
}
