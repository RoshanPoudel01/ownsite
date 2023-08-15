import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-ceter w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit facilis, ab consectetur sequi pariatur odit sapiente, adipisci earum maiores hic? Iste consequuntur ipsa eveniet voluptatem sed dignissimos in laudantium odit rerum eos id delectus earum reiciendis, quia molestias tempora! Eum labore at soluta sapiente saepe incidunt, impedit nulla inventore.</p>
                <br />
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi ratione incidunt omnis iure ut asperiores autem placeat, impedit maiores quibusdam dolorum corporis optio cumque voluptatibus totam? Sunt molestias exercitationem nihil libero, ipsam perferendis voluptates nobis placeat blanditiis nesciunt. Hic tempora consequatur minima iure eaque aperiam suscipit quos soluta asperiores.</p>
            </div>
        </div>
    )
}

export default About