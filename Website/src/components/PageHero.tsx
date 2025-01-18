import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Container from './Container'

function PageHero({name}:{name: string}) {
  return (
    <section  style={{backgroundImage:'url("/sectionHeroBg.png")'}}>
  <Container>
    <div className='w-full h-80 flex flex-col justify-center items-center'>
        <Image src={'/House_Logos-05.png'} alt='House_Logos' height={50} width={50} />
        <h1 className="font-mediam text-5xl mb-3">{name}</h1>
        <p className='text-base font-medium flex gap-1 items-center justify-center '>Home <ChevronRight /> <span className='font-light'>{name}</span></p>
    </div>
    </Container>
    </section>
  )
}

export default PageHero