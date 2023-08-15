import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-ceter w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Good day! I'm a passionate developer who enjoys creating interesting online experiences. With the fundamental triad of HTML, CSS, and JavaScript as my starting point for my web development career, I've been on an interesting adventure to learn about frontend development ever since.</p>
                <br />
                <p className='text-xl'>Making innovative designs into interactive realities is my passion. I can add style and aesthetics to content with CSS, add interactivity and dynamic features with JavaScript, and organize material with HTML using my toolkit of CSS and JavaScript.Recently i have been diving int the realm of React and find it very amusing and fun to use. I can easily cooperate with others and follow the development of my projects with Git by my side.</p>
            </div>
        </div>
    )
}

export default About