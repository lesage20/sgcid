<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ServiceSection from './components/ServiceSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import RentalSection from './components/RentalSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <ServiceSection />
    <ProjectSection />
    <RentalSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>