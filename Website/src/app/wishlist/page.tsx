"use client"
import React from 'react'
import Container from '@/components/Container'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAppSelector } from '@/lib/store/hooks'
import PageHero from '@/components/PageHero'

function Page() {
  const wishlistProducts = useAppSelector(state => state.wishlist.items);

  return (
    <div>
      <PageHero name='Whish List' />
      <Container>
        <div className="w-full py-6 bg-white">
          <div className="w-full">
              {wishlistProducts.length > 0 ? (
                <div className="w-full grid  grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                {wishlistProducts.map((product, index) => (
                  <div key={index} className="mx-auto">
                    <ProductCard {...product} isWishlistPg={true} />
                  </div>
                ))}
              </div>
              ) : (
                <p className="text-center text-gray-500 py-20">No products in the wishlist.</p>
              )}
            </div>
        </div>
      </Container>


    </div>
  )
}

export default Page
