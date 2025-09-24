'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 'engagement-ring-1',
    name: 'Classic Engagement Ring',
    price: 2499,
    originalPrice: 2999,
    image: '/products/diamond-ring-1.jpg',
    category: 'Rings',
    isSale: true
  },
  {
    id: 'wedding-band-1',
    name: 'Elegant Wedding Band',
    price: 1299,
    originalPrice: null,
    image: '/products/gold-band-1.jpg',
    category: 'Rings',
    isSale: false
  },
  {
    id: 'anniversary-ring-1',
    name: 'Anniversary Ring',
    price: 1899,
    originalPrice: 2199,
    image: '/products/vintage-ring-1.jpg',
    category: 'Rings',
    isSale: true
  }
]

export default function PerfectDiamondSection() {
  // Navigation state for future carousel functionality
  // const [currentIndex, setCurrentIndex] = useState(0)

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % products.length)
  // }

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  // }

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif mb-8">
            Find The Perfect Diamond For
          </h2>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </button>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isSale && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">Sale</Badge>
                      )}
                      <div className="absolute top-2 right-2">
                        <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500">Categories</span>
                  </div>
                  
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add To Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
