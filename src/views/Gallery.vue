<script setup lang="ts">
const images = [
  { id: 1, src: '/images/gallery/10122.jpg', alt: 'Abstract Geometric Pattern 1' },
  { id: 2, src: '/images/gallery/5026570.jpg', alt: 'Abstract Geometric Pattern 2' },
  { id: 3, src: '/images/gallery/abstract-dark-twisted-tunnel-constructed-with-star-shape.jpg', alt: 'Abstract Geometric Pattern 3' },
]
</script>

<template>
  <div class="min-h-screen pt-24 px-4 container mx-auto">
    <h1 class="text-4xl font-cinzel text-center mb-12">Gallery</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="image in images" 
        :key="image.id"
        class="gallery-item aspect-square"
      >
        <img 
          :src="image.src" 
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>