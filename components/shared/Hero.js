import React from 'react'
import PropTypes from 'prop-types'

export default function Hero(props) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="w-full h-full cover-full" style={props.background}></div>
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
        {props.title}
      </h2>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        {props.description}
      </p>
    </section>
  )
}

Hero.propTypes = {
  background: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string
}
