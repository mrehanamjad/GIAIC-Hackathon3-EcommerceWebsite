import Container from '@/components/Container'
import DeliveryServices from '@/components/DeliveryServices'
import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'

function myAccount() {
  return (
    <div className='w-full'>
        <PageHero name="My Account" />
            <Container className='px-4 my-10'>
                <div className='w-full max-w-6xl mx-auto flex justify-between max-lg:flex-col max-lg:justify-center'>
                    <div className='w-full h-full text-black px-4 py-12 flex flex-col gap-9 max-lg:items-center'>
                        <h2 className='font-semibold text-4xl mb-3'>Login</h2>
                        <div className="flex flex-col gap-9">
                        <Input 
                            label='Username or email address'
                            type='email'
                        />
                        <Input 
                            label='Password'
                            type='password'
                        />
                        <label htmlFor='r-me' className='flex items-center gap-4'> <Checkbox id={"r-me"} /> Remember me</label>
                        </div>
                        <div className='flex items-center max-lg:flex-col gap-4'>
                            <Button variant={'fBtn2'} size={'f2'} className='w-44 '>Login</Button>
                            <span className='font-extralight text-sm text-black/70'>Lost Your Password?</span>
                        </div>
                    </div>
                    <div className='w-full h-full text-black px-4 py-12   flex flex-col gap-9 max-lg:items-center '>
                        <h2 className='font-semibold text-4xl mb-3'>SignUp</h2>
                        
                        <Input label='Email address' />
                        <div className='font-light max-sm:text-center text-black/80 max-w-[26rem] text-justify space-y-4'>
                        <p >A link to set a new password will be sent to your email address.</p>
                        <p >Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-medium'>privacy policy.</span></p>
                        </div>
                        <Button variant={'fBtn2'} size={'f2'} className='w-48'>Regester</Button>
                    </div>
                </div>
            </Container>
        <DeliveryServices />
    </div>
  )
}

export default myAccount