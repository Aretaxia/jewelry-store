'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const categories = [
  {
    id: 'rings',
    name: 'Rings',
    image: '/categories/rings.jpg'
  },
  {
    id: 'couple-rings',
    name: 'Couple Rings',
    image: '/categories/couple-rings.jpg'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: '/categories/earrings.jpg'
  }
]

export default function CategoryCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">Categories</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h3>
                
                <div className="relative h-48 mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/collections/${category.id}`}>
                    Check More Product
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
