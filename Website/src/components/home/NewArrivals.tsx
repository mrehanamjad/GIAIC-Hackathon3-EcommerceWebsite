import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Container from '../Container'
import Link from 'next/link'

function NewArrivals() {
  return (
    <section className='bg-[#FFF9E5]'>
    <Container>
    <div className='w-full  h-[38rem] grid grid-cols-1 max-md:grid-rows-2 md:grid-cols-3'>
        <div className='md:col-span-2 max-md:h-80 sm:w-[28rem] md:w-full mx-auto '>
            <Image src={'/Asgaard sofa 1.png'} alt={'Asgaard sofa'} className='sm:w-full sm:h-5/6  mt-14 sm:mt-20 md:mb-auto' width={1000} height={1000} />
        </div>
        <div className='col-span-1 flex justify-center items-center max-sm:mb-10 md:mr-auto md:ml-6'>
            <div className='text-center '>
                <h3 className='font-medium text-2xl mb-2'>New Arrivals</h3>
                <h2 className='font-bold text-5xl mb-8'>Asgaard sofa</h2>
               <Link href={'/product/18'}> <Button variant={'fBtn2'} size={"f2"} className='rounded-none px-14 '>Order Now</Button></Link>
            </div>
        </div>
    </div>
    </Container>
    </section>
  )
}

export default NewArrivals