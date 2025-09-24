import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import CategoryCarousel from '@/components/category-carousel'
import FeaturedProducts from '@/components/featured-products'
import PerfectDiamondSection from '@/components/perfect-diamond-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <CategoryCarousel />
        <FeaturedProducts />
        <PerfectDiamondSection />
      </main>
      <Footer />
    </div>
  )
}
