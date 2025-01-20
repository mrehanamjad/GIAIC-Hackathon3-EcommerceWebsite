import Container from '@/components/Container'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import {  useAppSelector } from '@/lib/store/hooks'
import { Link } from 'lucide-react'
import React from 'react'

function page() {
    const wishlistProducts = useAppSelector(state => state.wishlist.items)


  return (
    <div>
        <Container>
    <div className='w-full py-6 bg-white '>
            <div className="w-full">
            <div className="flex justify-between  overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {wishlistProducts.map((product, index) => (
                <div key={index} className="">
                 <ProductCard {...product} />
                </div>
              ))}
            </div>
            </div>
            <div className="flex items-center justify-center h-36">
                <Link href={"/shop"} ><Button variant={'fBtn1'} size={'lg'}>{"View All"}</Button></Link>
            </div>
    </div>
    </Container>
    </div>
  )
}

export default page