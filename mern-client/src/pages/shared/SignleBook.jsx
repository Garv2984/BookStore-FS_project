import React from 'react'
import { useLoaderData } from 'react-router-dom'

 import { Banner} from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

const SingleBook = () => {
    const data = useLoaderData();
     const { bookTitle,imageURL,bookPDFURL,category,authorName,bookDescription} = useLoaderData();
    // console.log(data)
    return (
        <div className='mt-20'>
            <Banner>
                <div className=" z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-2xl font-normal text-black">
                            <MdAnnouncement className='me-2 text-red-600' />
                            <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
                        </p>
                    </div>
                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
                        <HiX className="h-4 w-4" />
                    </Banner.CollapseButton>
                </div>
            </Banner>

            {/* book details */}
           
<div className="container mx-auto mt-8 flex border rounded-lg overflow-hidden">
    {/* Image */}
    <img src={imageURL} alt={bookTitle} className="h-96 flex-shrink-0" />

    {/* Text */}
    <div className="p-6 flex flex-col justify-between">
        <div>
            <h2 className="text-xl font-semibold mb-4">Book Details</h2>
            <p><strong>Title:</strong> {bookTitle}</p>
            <p><strong>Author:</strong> {authorName}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Description:</strong> {bookDescription}</p>

        </div>
        <div>
            <h2 className="text-lg font-semibold">Download PDF</h2>
            <a href={bookPDFURL} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Download Now</a>
        </div>
    </div>
</div>

         
        </div>
        
        
    )
}

export default SingleBook