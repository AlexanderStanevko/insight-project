<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // gsap.from('.logo-animation', {
  //   scale: 0.8,
  //   opacity: 1,
  //   duration: 1.5,
  //   ease: 'power3.out'
  // })

  gsap.from('.title-animation', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4">
    <div class="logo-container mb-8">
      <div class="logo-animation">
        <img src="/myLogo.svg" alt="Insight Logo" class="w-full h-full" />
      </div>
    </div>
    
    <h1 class="title-animation text-4xl md:text-6xl font-cinzel text-center mb-4">
      INSIGHT
    </h1>
    
    <p class="title-animation text-xl md:text-2xl font-cormorant text-center text-white/60 max-w-2xl">
      Exploring the depths of perception through geometric harmony
    </p>
  </div>
</template>