<template>
    <div class="gantt">
        <div class="acciones mt-2">
            <button class="btn btn-info btn-outline-info" v-on:click="modalClasificacion('administrar')">Administrar categorias</button>
        </div>

        <div class="tareas">
            <CardGanttTitle titulo="Lista de Tareas" />
            <CardGantt :titulo="tarea.titulo" :indice="index" :clasificacion="clasificacion[tarea.tipo]" v-for="(tarea, index) in tareas" :key="'tarea_'+ index" :title="tarea.titulo"  />
        </div>
        <div class="dias">
            <div class="fila_dias" v-bind:style="'width: '+anchoFila+'px'">
                <div v-for="(dia, index) in dias" :key="'dia_'+index" class="dia_cabecera" v-html="tituloDia(index, dia)"></div>
            </div>
            <div v-for="(tarea, index2) in tareas" :key="'tarea_'+ index2" class="fila_dias" v-bind:style="'width: '+anchoFila+'px'" :class="'fila_'+index2+ ' columna_+' + index2 ">
                <div 
                v-for="(dia, index3) in dias" 
                :key="'dia_'+index3" 
                :class="'columna_' + index2 " 
                v-on:click="seleccionarDia(index3, tarea, index2, $event)" class="dia" 
                ></div>
                <!-- :style="'background-color: '+colorDia(indiceDia, tarea, indiceTarea, evento)+'; '" -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        },
        props: {
            dias: Array,
        },
        computed: 
        {
            anchoFila : function(){
                debugger;
                let ancho = (this.dias.length - 1) * this.anchoDia;
                return ancho
            }
        },
        data(){
            return{
                tareas: this.$root.tareas,
                clasificacion:this.$root.clasificacion,
                anchoDia: 45,
                colorFondoDia: 'rgba(255,255,255,.5)'
            }
        },
        methods: {
            modalClasificacion: function(accion){
                this.$root.modalClasificacion(accion);
            },
             tituloDia: function(indice, dia){
                var numero =  indice + 1;
                return 'Día<br>'+ numero;
            },
    
            seleccionarDia: function(indiceDia, tarea, indiceTarea, evento){
                debugger;
                var color = this.clasificacion[tarea.tipo].color;

                var existe = false;
                tarea.diasElegidos.find(function(elemento){
                    debugger;
                    if(elemento == indiceDia)
                    {
                        existe = true;
                    }
                });

                if(existe)
                {
                    tarea.diasElegidos[indiceDia]=null;
                    evento.target.style.backgroundColor = this.colorFondoDia;
                }
                else
                {
                    tarea.diasElegidos[indiceDia]=indiceDia;
                    evento.target.style.backgroundColor = color;
                }
                this.$root.tareas = this.tareas;
                localStorage.setItem('tareas', JSON.stringify(this.tareas))
            },

            colorDia: function(indiceDia, tarea, indiceTarea, evento){
                
                var color = this.clasificacion[tarea.tipo].color;
                var existe = false;
                tarea.diasElegidos.find(function(elemento){
                    debugger;
                    if(elemento == indiceDia)
                    {
                        existe = true;
                    }
                });

                if(existe)
                {
                    return color;
                }
                else
                {
                    return this.colorFondoDia;
                }
            }
        }
    }
</script>
<style scoped>
    .tareas{
        position: relative; float: left; width: 25%;
    }
    .dia{
        height:43px; width: 43px;
        border: 1px solid #EEEEEE;
        background: rgba(255,255,255,.5);
        position: relative;
        float: left;
    }
    .dia_cabecera{
        height:43px; width: 43px;
        border: 1px solid #FFFFFF;
        background:#04befe;
        position: relative;
        float: left;
        color: #FFFFFF;
        text-align: center;
        font-size: 14px;
        transition: 0.3s all ease;
        cursor: pointer;
    }
    .dia_cabecera:hover{
        background:#03aded;
    }
    .fila_dias{
        position: relative; float: left;
    }
    .dias{
        position: relative; float: left; width: 75%; overflow-x: scroll;
                border-right: 1px solid #EEEEEE;

    }
    .dia:hover{
        background-color: rgba(61, 188, 177,.3)
    }
    .gantt{
        position: relative;
        float: left;
        width: 100%;
    }
    .acciones{
        position: relative;
        float: left;
        width: 100%;
    }



</style>
