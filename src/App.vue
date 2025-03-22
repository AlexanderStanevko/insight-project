<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="bg-primary-bg min-h-screen">
    <Navigation />
    <router-view v-slot="{ Component }">
      <transition 
        name="page" 
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>