'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/products/diamond-ring-1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
          Discover Your Sparkle
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Welcoming In The Spring Season With An Enchanting Emerald, Diamond & Gold Grace With Earrings.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 text-lg">
            <Link href="/collections">
              Buy Now
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-white bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
            <Link href="/collections">
              Explore
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
