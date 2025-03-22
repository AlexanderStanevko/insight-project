<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <div class="min-h-screen pt-24 px-4 container mx-auto">
    <h1 class="text-4xl font-cinzel text-center mb-12">Contact</h1>
    
    <div class="max-w-2xl mx-auto">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-white/80 mb-2 font-cinzel">Name</label>
          <input 
            v-model="form.name"
            type="text"
            required
            class="contact-input w-full"
          />
        </div>
        
        <div>
          <label class="block text-white/80 mb-2 font-cinzel">Email</label>
          <input 
            v-model="form.email"
            type="email"
            required
            class="contact-input w-full"
          />
        </div>
        
        <div>
          <label class="block text-white/80 mb-2 font-cinzel">Message</label>
          <textarea 
            v-model="form.message"
            required
            rows="5"
            class="contact-input w-full resize-none"
          ></textarea>
        </div>
        
        <button type="submit" class="btn-primary w-full">
          Send Message
        </button>
      </form>
      
      <div class="mt-12 text-center">
        <h2 class="text-2xl font-cinzel mb-4">Connect With Us</h2>
        <div class="flex justify-center space-x-6">
          <!-- Add social media icons here -->
          <a href="#" class="text-white/60 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" class="text-white/60 hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" class="text-white/60 hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</template>