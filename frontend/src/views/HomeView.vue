<script setup>
  // import TheWelcome from '../components/TheWelcome.vue'
  import MainHeader from '@/components/MainHeader.vue';
  import MainFooter from '@/components/MainFooter.vue';
  import MainHome from '@/components/MainHome.vue';
</script>

<template>
  <MainHeader/>
  <div class="main">
    <MainHome/>
  </div>
  <MainFooter/>
</template>

<style>
  /* .main {
    background-color: var(--vt-c-text-dark-3);
  } */
</style>