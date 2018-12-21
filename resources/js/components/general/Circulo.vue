<template>
    <svg>
        <circle cx="8" cy="8" r="8" :fill="color" />
    </svg>
</template>

<script>

export default {
  name: 'Circulo',
  components: {
  },
  props:{
      color: String
  }
}
</script>
<style scoped>
 svg{
     width: 16px;
     height: 16px;
 }

</style>
