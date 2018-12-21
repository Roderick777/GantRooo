<template>
    <div class="card" style="width: 100%;">
        <div class="card-body">
        {{ titulo }}
        </div>
    </div>
</template>

<script>

export default {
  name: 'CardGanttTitle',
  components: {
  },
  props:{
      titulo:String,
      texto:String,
      tipo:String,
      clasificacion:Object
  }
}
</script>
<style scoped>
.card-body {
    flex: 1 1 auto;
    padding: 13px !important;
    text-align: left !important;
    height:37px;
}
.card{
    
    margin-bottom: 0px;
    border-radius: 0px;
    height: 43px;
}

</style>
