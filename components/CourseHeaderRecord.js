import React from 'react'

export default function CourseHeaderRecord({details}) {
    const sentences = details.description.split('.');
    sentences.splice(sentences.length - 1, 1);
    return (
        <div className='bg-gray-200 py-20 px-10 flex flex-col items-center'>
            <h1 className='text-2xl text-gray-800 font-bold text-center'>
                {details.smallTitle}
                <span className='block text-gray-600 text-6xl font-bold mb-10'>{details.bigTitle}</span>
            </h1>
            {sentences.map((sentence, index) => (
                <p key={index} className='text-gray-500 text-lg max-w-lg'>
                    {sentence}
                </p>
            ))}
            <a href="#Pricing" className='rounded-md bg-yellow-300 font-bold text-xl mt-8  py-3 px-4 text-gray-800 hover:bg-yellow-400'>{details.buttonText}</a>

        </div>
    )
}
