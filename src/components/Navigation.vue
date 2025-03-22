<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="fixed top-0 w-full bg-primary-bg/90 backdrop-blur-sm z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-cinzel text-white">INSIGHT</router-link>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/gallery" class="nav-link">Gallery</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1.5"
        >
          <span 
            class="w-6 h-0.5 bg-white transition-transform"
            :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
          ></span>
          <span 
            class="w-6 h-0.5 bg-white transition-opacity"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span 
            class="w-6 h-0.5 bg-white transition-transform"
            :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
          ></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="isMenuOpen"
        class="md:hidden pt-4 pb-2"
      >
        <div class="flex flex-col space-y-4">
          <router-link 
            v-for="link in ['Home', 'Gallery', 'Contact']" 
            :key="link"
            :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
            class="nav-link text-center"
            @click="isMenuOpen = false"
          >
            {{ link }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>