<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const navItems = [
  { name: 'Acceuil', href: '#home' },
  { name: 'Nos Services', href: '#services' },
  // { name: 'Projets', href: '#projects' },
  { name: 'Maisons en vente', href: '#rentals' },
  // { name: 'Contact', href: '#contact' }
];
</script>

<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <!-- <span class="text-2xl font-bold text-primary">SGCID</span> -->
          <img src="/images/logo.png" alt="" width="150">
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in navItems" 
             :key="item.name" 
             :href="item.href"
             class="text-gray-700 hover:text-secondary transition-colors duration-200">
            {{ item.name }}
          </a>
          <a href="#contact" class="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200">
            Contactez-nous
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="h-screen flex flex-col justify-between	 px-2 text-center pt-2 pb-3 space-y-1 sm:px-3">
        <a v-for="item in navItems" 
           :key="item.name" 
           :href="item.href"
           class="block px-3  text-gray-700 hover:text-secondary transition-colors duration-200"
           @click="isMenuOpen = false">
          {{ item.name }}
        </a>
        <a class="w-full mt-2 bg-secondary text-white px-4  rounded-md hover:bg-opacity-90 transition-colors duration-200">
          Contactez-nous
        </a>

        
      </div>
    </div>
  </nav>
</template>