<template>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Drawer',
  components: {
  },
  props: {
      titulo:String
  },
  methods: {
      abrirMenu: function(indice){

      }
  },
  data(){
      menus[
            {id: 1,titulo:'Inicio', icono:''},
            {id: 2,titulo:'Gantt', icono:''},
            {id: 3,titulo:'Acerca de', icono:''}
      ]
  }
}
</script>
<style scoped>
.tareas_gantt{
    min-height: 500px;    
}
</style>
