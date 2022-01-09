import React from 'react'

export default function PricingCard({details}) {

    if(details.featured) {

    return (
      <div className='bg-white border-yellow-500 border-4 w-full max-w-sm rounded-lg p-6'>
        <h3 className='text-purple-600 text-xl mb-4 uppercase'>{details.title}</h3>
        <p className='text-purple-600 text-6xl font-bold mb-10'>
          {details.isFree ? (
            <span>FREE</span>
          ) : (
            <span>{details.priceInCents / 100}</span>
          )}
          {details.priceSuffix && (
            <span className='text-lg m-1'>{details.priceSuffix}</span>
          )}
        </p>
        <ul>
          {details.description.split("*").map((bullet, index) => (
            <li key={index} className='text-gray-500 my-2 text-sm'>
              {bullet}
            </li>
          ))}
        </ul>
        <button className='bg-yellow-400 text-purple-500 hover:bg-yellow-300 mt-10 w-full inline-block py-3 lg:py-5 px-8 rounded-md shadow-sm text-center lg:text-xl font-medium sm:w-auto lg:w-full'>
          {details.buttonText}
        </button>
        <p className='mt-4 text-xs md:text-sm text-center text-gray-500'>
          {details.finePrint}
        </p>
      </div>
    );
           } else {
        return (
      <div className='bg-purple-500 w-full max-w-sm rounded-lg p-6'>
        <h3 className='text-white text-xl mb-4 uppercase'>{details.title}</h3>
        <p className='text-white text-6xl font-bold mb-10'>
          {details.isFree ? (
            <span>FREE</span>
          ) : (
            <span>{details.priceInCents / 100}</span>
          )}
          {details.priceSuffix && (
            <span className='text-lg m-1'>{details.priceSuffix}</span>
          )}
        </p>
        <ul>
          {details.description.split("*").map((bullet, index) => (
            <li key={index} className='text-purple-100 my-2 text-sm'>
              {bullet}
            </li>
          ))}
        </ul>
        <button className='bg-purple-400 text-purple-50 hover:bg-purple-300 mt-10 w-full inline-block py-3 lg:py-5 px-8 rounded-md shadow-sm text-center lg:text-xl font-medium sm:w-auto lg:w-full'>
          {details.buttonText}
        </button>
        <p className='mt-4 text-xs md:text-sm text-center text-purple-200'>
          {details.finePrint}
        </p>
      </div>
    );
    }
}
