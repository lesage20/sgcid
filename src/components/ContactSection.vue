<script setup lang="ts">
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';

const contactRef = ref(null);
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

useMotion(contactRef, {
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 800 }
});

const handleSubmit = (event: Event) => {
  event.preventDefault();
  // Handle form submission logic here
  console.log('Form submitted:', formData.value);
};
</script>

<template>
  <section id="contact" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-4">Contactez-nous</h2>
        <p class="text-xl text-gray-600">Batissons ensemble votre projet immobilier sur le roc.</p>
      </div>

      <div ref="contactRef" class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-gray-50 p-6 rounded-xl">
            <h3 class="text-2xl font-semibold text-primary mb-6">Prendre contact</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="bg-secondary/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">Nos Agences</h4>
                  <p class="text-gray-600">Bingerville quartier Paris village</p>
                  <p class="text-gray-600">Daloa quartier Taziboua</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-secondary/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">Ecrivez nous par mail</h4>
                  <p class="text-gray-600">infossgcid@gmail.com</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-secondary/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">Nos Contacts</h4>
                  <p class="text-gray-600">+225 27 34 77 77 88</p>
                  <p class="text-gray-600">+225 05 74 65 70 70</p>
                  <p class="text-gray-600">+225 07 07 36 79 05</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit="handleSubmit" class="bg-gray-50 p-8 rounded-xl">
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom et Prénoms</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-secondary text-white py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200"
            >
              Envoyez votre message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>