<template>
    <div class="card" style="width: 100%;">
        <div class="card-body">
            <Circulo :color="clasificacion.color" />
            {{ titulo }}
            <div class="acciones">
                <button class="btn btn-dark btn-outline-dark boton" v-on:click="eliminarTarea(indice)" title="Close"><i class="fa fa-close"></i></button>
                <button class="btn btn-dark btn-outline-dark boton" v-on:click="editarTarea(indice)" title="Editar"><i class="fa fa-edit" style="top: 1px;"></i></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'CardGantt',
  components: {
  },
  props:{
      indice:Number,
      titulo:String,
      texto:String,
      tipo:String,
      clasificacion:Object
  },
  methods: {
      editarTarea: function(indiceTarea)
      {

      },
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
.boton{
    font-size: 14px;
    padding: 5px 5px;
    height: 29px;
    position: relative;
    float: right;
    border: none;
}
.acciones{
    position: absolute;
    right: 10px;
    top: 7px;
}
.fa{
    display: block;
    position: relative;
    float: left;
    width: 10px;
    height: 15px;;
}

</style>
