<template>
    <div class="card">
        <div class="card-body" v-html="texto">
        </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  components: {
  },
  props:{
      texto: String
  }
}
</script>