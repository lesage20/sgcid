<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';

const heroText = ref(null);
const heroImage = ref(null);

useMotion(heroText, {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 800 }
});

useMotion(heroImage, {
  initial: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0 },
  transition: { duration: 800, delay: 200 }
});
</script>

<template>
  <section id="home" class="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div ref="heroText">
          <h1 class="text-5xl font-bold text-primary mb-6">
            Construisez votre avenir sur des bases solides!
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Société Générale de Construction, d'Investissement et de Développement ( SGCID )
          </p>
          <div class="space-x-4">
            <a href="#contact" class="bg-secondary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200">
              Contactez-nous
            </a>
            <a href="#rentals" class="hidden lg:inline-block border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-200">
              Maison en ventes
            </a>
          </div>
        </div>
        <div ref="heroImage" class="relative">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Modern building"
            class="rounded-lg shadow-2xl"
          />
          <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
            <div class="flex items-center space-x-4">
              <div class="bg-green-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-xl font-bold text-primary">Plus de 50 Clients</p>
                <p class="text-sm text-gray-600">Nous font confiance et vous qu'attendez vous?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>