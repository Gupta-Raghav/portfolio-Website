import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

function Typewitter() {
  return (
    <TypeWriterEffect
        textStyle={{
          fontFamily:`'Source Code Pro', 'monospace'`,
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '.5em',
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          '>People sometime call me RG',
          '>and I am a.....',
          '>Certified Ethical Haker',
          '>MERN full Stack web-developer',
          '>Software Engineer',
          '>photographer'
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
  )
}

export default Typewitter