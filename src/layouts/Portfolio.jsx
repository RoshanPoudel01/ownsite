import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"

import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import hotel from "../assets/portfolio/hotel.png"
import usestate from "../assets/portfolio/usestate.jpg"

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: arrayDestruct,
            link: "https://github.com/RoshanPoudel01/react.git",
        },
        {
            id: 2,
            src: installNode,
            link: "https://github.com/RoshanPoudel01/serv.git",
        }, {
            id: 3,
            src: navbar,
            link: "https://github.com/RoshanPoudel01/ownsite.git",
        }, {
            id: 4,
            src: hotel,
            link: "https://github.com/RoshanPoudel01/react.git",
        }, {
            id: 5,
            src: reactSmooth,
            link: "https://github.com/RoshanPoudel01/ownsite.git",
        }, {
            id: 6,
            src: usestate,
            link: "https://github.com/RoshanPoudel01/react.git",
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check Out Some Of My Work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolio.map(({ id, src, link }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-60' />
                                <div className='flex items-center justify-center'>

                                    <button onClick={() => { window.open(link, "_blank") }} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio