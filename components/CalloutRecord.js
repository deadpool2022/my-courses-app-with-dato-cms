import React from 'react'
import Image from 'next/image';

export default function CalloutRecord({details}) {
    return (
      <div className='bg-gray-800 py-20 px-10'>
          <div className='flex flex-col max-w-6xl md:flex-row md:items-center mx-auto'>
              <div className='md:w-[60%] grow p-4'>
                <h2 className='text-4xl font-bold text-gray-200'>
                    {details.smallTitle}
                    <span className='block text-yellow-200 text-6xl font-bold mb-10'>{details.bigTitle}</span>
                    <p className='text-xl max-w-lg text-gray-200'>{details.description}</p>
                </h2>
              </div>
              <div className='w-full p-4'>
                <Image 
                width={details.image.width}
                height={details.image.height}
                src={details.image.url} alt={details.smallTitle + details.bigTitle} />
              </div>
          </div>
      </div>
    );
}
