import React from 'react'
import PropTypes from 'prop-types'

export default function Hero(props) {
  return (
    <section className="relative w-full">
      <div className="relative z-10 flex flex-col text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          {props.title}
        </h2>
        <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {props.description}
        </p>
      </div>
      <div className="w-full h-full absolute top-0 z-0">
        <img src={props.background} alt={props.title} loading="lazy" />
      </div>
    </section>
  )
}

Hero.propTypes = {
  background: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}
