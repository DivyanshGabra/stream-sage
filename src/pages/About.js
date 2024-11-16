import React from 'react'
import { SCREENSHOT } from '../utils/constants'

const About = () => {
  return (
    <div className='about-us mt-[70px] px-4 md:px-24'>
      <h1 className='text-5xl text-white text-center mb-4 font-bold'>About <span className='text-blue-500 font-bold'>StreamSage</span></h1>
      <p className='text-gray-400 mb-8 text-center'>
        "Welcome to StreamSage, your new movie sidekick! Ever spent hours scrolling through endless lists of movies, only to give up and rewatch something you’ve seen a million times? Well, those days are over! StreamSage is here to revolutionize the way you discover movies. 🚀
        <br />
        <br />
        Dive into the world of StreamSage, a carefully crafted project that boasts an impressive tech stack including React, Redux, Webpack, React Router, TMDB APIs, Tailwind CSS, Firebase, React-DOM, and Jest.
        The result? An exceptional web application designed for optimal performance and seamless user interactions.

        Powered by the magic of AI (thanks to OpenAI's ChatGPT) and the endless database of TMDB, StreamSage gets to know your movie preferences and serves up personalized recommendations faster than you can say “popcorn!” Whether you're into epic space adventures, quirky indie films, or anything in between, we've got you covered.
        <br />
        <br />
      </p>

      <div className='mb-8 text-gray-200'>
        Github: <a href='https://github.com/okNeeraj/netflix-gpt' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' target='_blank' rel='noreferrer'>StreamSage</a>
        <br />
        Live Demo: <a href='https://stream-sage.web.app/' target='_blank' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' rel='noreferrer'>Live Demo</a>
        <br></br>
        Linkedin: <a href='https://www.linkedin.com/in/divyansh-gabra/' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' target='_blank' rel='noreferrer'>Divyansh Gabra</a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.landing} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.landing} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Landing Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.signin} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.signin} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Signin Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.signup} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.signup} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Signup Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.browse} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.browse} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Browse Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.movieList} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.movieList} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Movie List Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.search} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.search} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Search Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.shimmer} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.shimmer} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Shimmer UI loading' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.watch} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.watch} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Watch Now Page' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
