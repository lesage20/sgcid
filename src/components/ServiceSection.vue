<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';

const serviceRef = ref(null);

useMotion(serviceRef, {
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 800 }
});

const services = [
  {
    title: 'Construction',
    description: 'Nos techniciens et toute notre équipe technique sont disponibles pour la construction de vos maisons.',
    icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
  },
  {
    title: "Vente et achat d'immobiliers",
    description: 'Vous desirez vendre ou acheter un bien immobilier. Vous êtes à la bonne adresse.',
    icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21'
  },
  {
    title: 'Gestion et location',
    description: 'Vous souhaitez mettre votre maison en location ou louer une maison. Vous êtes à la bonne adresse.',
    icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
  },
  {
    title: 'Conception de plan',
    description: 'Nos architectes concoivent des plan de maison moderne pour votre confort.',
    icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
  }
];
</script>

<template>
  <section id="services" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-4">Nos Services</h2>
        <p class="text-xl text-gray-600">Voyez comment nous pouvons vous aider.</p>
      </div>
      
      <div ref="serviceRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-8 h-8 text-secondary"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                :d="service.icon" 
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-primary mb-3">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>