import React from 'react'

export interface HeroProps {
  /**
   * Required. The headline at the top of the hero.
   */
  title: string
  /**
   * Optional. Supporting text below the headline.
   */
  description?: string
  /**
   * Optional. A background image.
   */
  background?: string
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 p-24 lg:p-64">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          {props.title}
        </h2>
        <p className="text-base text-gray-700 sm:text-lg md:text-xl">
          {props.description}
        </p>
      </div>
      <div className="absolute top-0 z-0">
        <img src={props.background} alt="" loading="lazy" />
      </div>
    </section>
  )
}

export default Hero
