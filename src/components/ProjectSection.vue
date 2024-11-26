<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';

const projectRef = ref(null);

useMotion(projectRef, {
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 800 }
});

const projects = [
  {
    title: 'Azure Heights Tower',
    location: 'Downtown Financial District',
    description: 'A 45-story luxury commercial tower featuring state-of-the-art office spaces and sustainable design.',
    image: 'https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { area: '75,000 m²', completion: '2023', value: '$120M' }
  },
  {
    title: 'Green Valley Residences',
    location: 'Suburban Excellence',
    description: 'Eco-friendly residential complex with 200 premium apartments and extensive green spaces.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { area: '45,000 m²', completion: '2023', value: '$85M' }
  },
  {
    title: 'Innovation Hub',
    location: 'Tech District',
    description: 'Mixed-use development combining office spaces, retail, and collaborative areas for tech startups.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { area: '30,000 m²', completion: '2022', value: '$65M' }
  },
  {
    title: 'Marina Square Mall',
    location: 'Waterfront District',
    description: 'Premium shopping destination featuring high-end retail, dining, and entertainment facilities.',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    stats: { area: '60,000 m²', completion: '2023', value: '$95M' }
  }
];
</script>

<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
        <p class="text-xl text-gray-600">Excellence in every development</p>
      </div>
      
      <div ref="projectRef" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="text-2xl font-bold">{{ project.title }}</h3>
              <p class="text-sm">{{ project.location }}</p>
            </div>
          </div>
          
          <div class="p-6">
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            
            <div class="grid grid-cols-3 gap-4 text-sm">
              <div class="text-center p-2 bg-gray-50 rounded-lg">
                <p class="text-gray-500">Area</p>
                <p class="font-semibold text-primary">{{ project.stats.area }}</p>
              </div>
              <div class="text-center p-2 bg-gray-50 rounded-lg">
                <p class="text-gray-500">Completed</p>
                <p class="font-semibold text-primary">{{ project.stats.completion }}</p>
              </div>
              <div class="text-center p-2 bg-gray-50 rounded-lg">
                <p class="text-gray-500">Value</p>
                <p class="font-semibold text-primary">{{ project.stats.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>