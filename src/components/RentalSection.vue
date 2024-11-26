<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMotion } from '@vueuse/motion';

const rentalRef = ref(null);
const currentSlide = ref(0);
const currentSlides = ref({0:0, 1:0})
const properties = ref([
  {
    id: 1,
    title: 'Villa avec Piscine et Jardin',
    location: 'Cocody Riviera Golf',
    price: '500M FCFA',
    beds: 8,
    baths: 4,
    area: '300 m²',
    description: 'Villa moderne et spacieuse de 8 chambres, une piscine et un jardin idéale pour la famille associant confort et élégance.',
    currentSlide: 0,
    images: [
      '/images/maison-piscine-1a.jpg',
      '/images/maison-piscine-1b.jpg',
      '/images/maison-piscine-1c.jpg',
      '/images/maison-piscine-1d.jpg',
      '/images/maison-piscine-1e.jpg',
      '/images/maison-piscine-1f.jpg',
      // '../assets/images/maison-piscine-1d.jpg',
      // 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 2,
    title: 'Appartements de 3 pièces',
    location: 'Bingerville',
    price: '70M FCFA/appart',
    beds: 2,
    baths: 2,
    area: '50 m²',
    description: `Un grand salon accueillant, très spacieux, parfait pour vos moments de détente, 
    un grand balcon, de grandes chambres très aérées avec espaces de rangement et une cuisine fonctionnelle. Proche des
    commerces et des transports.`,
    currentSlide: 0,
    images: [
      '/images/appartement-1a.jpg',
      '/images/appartement-1b.jpg',
      '/images/appartement-1c.jpg',
      '/images/appartement-1d.jpg',
      // '/images/appartement-1e.jpg',
      // '/images/appartement-1f.jpg',
    ]
  },
]);

useMotion(rentalRef, {
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 800 }
});

const nextSlide = (propertyId: number) => {
  const property = properties.value.find(p => p.id === propertyId);
  if (!property) return;

  const currentIndex = properties.value.indexOf(property);
  const slideIndex = property.currentSlide + 1
  if (property.images[slideIndex]) {
    // currentSlide.value = slideIndex;
    properties.value[currentIndex].currentSlide = slideIndex

  } else {
    properties.value[currentIndex].currentSlide = 0
  }
};

const prevSlide = (propertyId: number) => {
  const property = properties.value.find(p => p.id === propertyId);
  if (!property) return;

  const currentIndex = properties.value.indexOf(property);
  const slideIndex = property.currentSlide - 1
  if (property.images[slideIndex]) {
    // currentSlide.value = slideIndex;
    properties.value[currentIndex].currentSlide = slideIndex

  } else {
    properties.value[currentIndex].currentSlide = 0
  }
};
</script>

<template>
  <section id="rentals" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-4">Maison en ventes</h2>
        <p class="text-xl text-gray-600">Decouvrez des maisons parfaites pour vous.</p>
      </div>

      <div ref="rentalRef" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="property in properties" :key="property.id"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <!-- Image Carousel -->
          <div class="relative h-64">
            <div class="relative h-full overflow-hidden">
              <transition-group name="fade">
                <img v-for="(image, index) in property.images" :key="index" :src="image" :alt="property.title"
                  class="absolute inset-0 w-full h-full object-cover" v-show="property.currentSlide === index" />
              </transition-group>
            </div>

            <!-- Carousel Controls -->
            <div class="absolute inset-0 flex items-center justify-between p-4">
              <button @click="prevSlide(property.id)"
                class="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button @click="nextSlide(property.id)"
                class="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-2xl font-bold text-primary">{{ property.title }}</h3>
                <p class="text-gray-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>


                  {{ property.location }}
                </p>
              </div>
              <p class="text-xl font-bold text-secondary">{{ property.price }}</p>
            </div>

            <p class="text-gray-600 mb-4">{{ property.description }}</p>

            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="text-center p-2 bg-gray-50 rounded-lg">
                <p class="text-gray-500">Chambres</p>
                <p class="font-semibold text-primary">{{ property.beds }}</p>
              </div>
              <div class="text-center p-2 bg-gray-50 rounded-lg">
                <p class="text-gray-500">Douches</p>
                <p class="font-semibold text-primary">{{ property.baths }}</p>
              </div>
              <div class="text-center p-2 bg-gray-50 rounded-lg">
                <p class="text-gray-500">Superficie</p>
                <p class="font-semibold text-primary">{{ property.area }}</p>
              </div>
            </div>

            <!-- <button
              class="w-full bg-secondary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200">
              Schedule Viewing
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>