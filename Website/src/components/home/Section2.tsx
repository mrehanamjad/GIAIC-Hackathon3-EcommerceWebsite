import React from 'react'
import { Button } from '../ui/button'
import Container from '../Container'

function Section2() {
  return (
    <Container >
    <div className='w-full h-[42rem] flex max-lg:flex-col justify-center items-center lg:p-8 z-20 bg-[FAF4F4]'>
        
        <ProductCardLg imagePath='/Granite square side table 1.png'/>
        <ProductCardLg imagePath='/Mask group.png'/>
    </div>
    </Container>
  )
}

export default Section2


export const ProductCardLg = ({imagePath}:{imagePath:string}) => {
    return (
        <div className='lg:w-[37.813rem] w-full lg:h-[35rem] h-[40rem] bg-cover bg-top lg:bg-right flex flex-col-reverse px-12 py-20 ' style={{backgroundImage:`url("${imagePath}")`}}>
            <div className='flex flex-col gap-5 '>
                <span className='font-medium text-4xl'>Side table</span>
                <Button variant={'fBtn1'}  >View More</Button>
            </div>
        </div>
    )
}