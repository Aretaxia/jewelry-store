'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ShoppingBag } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signOut } = useAuth()

  return (
    <nav className="sticky top-0 z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold text-white">Jewelry Store</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">
              About Us
            </Link>
            <Link href="/collections" className="text-white hover:text-yellow-400 transition-colors">
              Collection
            </Link>
            <Link href="/customization" className="text-white hover:text-yellow-400 transition-colors">
              Customization
            </Link>
            <Link href="/materials" className="text-white hover:text-yellow-400 transition-colors">
              Materials
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400 hover:bg-gray-800">
              <ShoppingBag className="h-5 w-5 mr-2" />
              My Cart
            </Button>
            {user ? (
              <Button
                variant="outline"
                size="sm"
                className="text-white border-gray-700 hover:bg-gray-800"
                onClick={signOut}
              >
                Sign out
              </Button>
            ) : (
              <Link href="/login" className="text-white hover:text-yellow-400">
                Sign in
              </Link>
            )}
            
            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-yellow-400">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gray-900">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link 
                    href="/" 
                    className="text-lg font-medium text-white hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-lg font-medium text-white hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/collections" 
                    className="text-lg font-medium text-white hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Collection
                  </Link>
                  <Link 
                    href="/customization" 
                    className="text-lg font-medium text-white hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Customization
                  </Link>
                  <Link 
                    href="/materials" 
                    className="text-lg font-medium text-white hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Materials
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-lg font-medium text-white hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
