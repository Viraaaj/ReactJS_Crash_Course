import React from 'react'

function Hero(HeroName) {
  if (HeroName === 'joker') {
    throw new Error('not a hero');
  }
  return (
    <div>
      {HeroName}
    </div>
  )
}

export default Hero
