<template>
  <svg 
    width="21" 
    height="22" 
    viewBox="0 0 21 22" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    :style="{ color }"
  >
    <path 
      d="M0.383871 0.941278C0.140718 1.18945 0 1.57583 0 2.07621V19.9244C0 20.4248 0.140718 20.8111 0.383871 21.0593L0.443884 21.1138L10.7018 11.1163V10.8802L0.443884 0.882767L0.383871 0.941278Z" 
      fill="currentColor"
    />
    <path 
      d="M15.3589 14.4505L11.9434 11.1163V10.8802L15.363 7.54607L15.4396 7.58945L19.4894 9.83611C20.6451 10.4737 20.6451 11.5229 19.4894 12.1645L15.4396 14.4071L15.3589 14.4505Z" 
      fill="currentColor"
    />
    <path 
      d="M14.8188 15.0279L11.3226 11.6191L1.00464 21.6801C1.38851 22.0736 2.0145 22.121 2.72637 21.7276L14.8188 15.0279Z" 
      fill="currentColor"
    />
    <path 
      d="M14.8188 6.96864L2.72637 0.269013C2.0145 -0.120394 1.38851 -0.072981 1.00464 0.320462L11.3226 10.3775L14.8188 6.96864Z" 
      fill="currentColor"
    />
  </svg>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#FFFAEC'
  }
})
</script>

<style scoped>

</style>
