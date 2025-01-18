import React from 'react'
import Container from '../Container'

function Follow() {
  return (
    <section className='bg-cover' style={{backgroundImage: `url("/Rectangle 17.png")`}}>
    <Container >
    <div className='w-full flex justify-center items-center flex-col gap-4 py-32 ' >
        <h2 className="font-bold text-4xl sm:text-6xl ">Our Instagram</h2>
        <p className="sm:text-lg">Follow our store on Instagram</p>
        <button className='px-10 py-2 sm:px-16 sm:py-3 shadow-black/50 bg-white shadow-2xl rounded-full text-lg'>Follow Us</button>
    </div>
    </Container>
    </section>
  )
}

export default Follow