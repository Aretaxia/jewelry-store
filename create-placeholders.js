// Simple script to create placeholder images using canvas
const fs = require('fs');
const path = require('path');

// Create placeholder images for categories
const categories = [
  { name: 'rings', color: '#FFD700', text: 'Rings' },
  { name: 'couple-rings', color: '#FF69B4', text: 'Couple Rings' },
  { name: 'earrings', color: '#FF6347', text: 'Earrings' },
  { name: 'necklaces', color: '#9370DB', text: 'Necklaces' },
  { name: 'bracelets', color: '#20B2AA', text: 'Bracelets' }
];

// Create placeholder images for products
const products = [
  { name: 'diamond-ring-1', color: '#FFD700', text: 'Diamond Ring' },
  { name: 'gold-band-1', color: '#FFD700', text: 'Gold Band' },
  { name: 'pearl-earrings-1', color: '#F5F5DC', text: 'Pearl Earrings' },
  { name: 'diamond-necklace-1', color: '#FFD700', text: 'Diamond Necklace' },
  { name: 'emerald-ring-1', color: '#50C878', text: 'Emerald Ring' },
  { name: 'couple-bands-1', color: '#FFD700', text: 'Couple Bands' },
  { name: 'diamond-studs-1', color: '#FFD700', text: 'Diamond Studs' },
  { name: 'vintage-ring-1', color: '#CD7F32', text: 'Vintage Ring' }
];

// Create hero background
const heroBg = { name: 'hero-bg', color: '#2C3E50', text: 'Hero Background' };

// Function to create SVG placeholder
function createSVGPlaceholder(name, color, text, width = 400, height = 300) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
          text-anchor="middle" dominant-baseline="middle" fill="white">${text}</text>
  </svg>`;
}

// Create category images
categories.forEach(category => {
  const svg = createSVGPlaceholder(category.name, category.color, category.text, 400, 300);
  fs.writeFileSync(path.join('public', 'categories', `${category.name}.jpg`), svg);
});

// Create product images
products.forEach(product => {
  const svg = createSVGPlaceholder(product.name, product.color, product.text, 400, 400);
  fs.writeFileSync(path.join('public', 'products', `${product.name}.jpg`), svg);
});

// Create hero background
const heroSvg = createSVGPlaceholder('hero-bg', '#2C3E50', 'Hero Background', 1920, 1080);
fs.writeFileSync(path.join('public', 'hero-bg.jpg'), heroSvg);

console.log('Placeholder images created successfully!');
