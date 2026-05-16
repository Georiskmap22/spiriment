<template>
  <Navbar />
  <slot></slot>
  <Footer />

   <!-- 
   
  
   :class="[
                index === cardContent.length - 1 ? 'py-8 md:py-12 lg:py-[93px]' : 'h-auto md:h-160 lg:h-[53.12rem] pt-8 md:pt-16 lg:pt-22.5',
                index > 0 ? '-mt-16 md:-mt-32 lg:-mt-60' : 'mt-0',
                'relative z-[calc(10+index)]' 
                ]" -->
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>