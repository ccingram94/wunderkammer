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
              <div>
                <h1 className="m-4 p-2 text-center font-display text-2xl lg:text-6xl p-2 bg-clip-text text-transparent bg-gold2">✨W✨</h1>
              </div>
              <div>
                <h1 className="m-4 p-2 font-display text-center text-2xl lg:text-6xl p-2 bg-clip-text text-transparent bg-gold2"> Der Wunderkammer </h1>
              </div>
              <div>
                <ShoppingCartIcon className='m-4 text-black h-6 w-6 lg:h-12 lg:w-12' />
              </div>
            </div>
        </div>
    </div>
  )
}
