require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Card', require('./components/general/Card.vue').default);
Vue.component('CardGantt', require('./components/general/CardGantt.vue').default);
Vue.component('CardGanttTitle', require('./components/general/CardGanttTitle.vue').default);
Vue.component('Circulo', require('./components/general/Circulo.vue').default);
Vue.component('Modalclasificacion', require('./components/general/Modalclasificacion.vue').default);

Vue.component('Gantt', require('./components/Gantt.vue').default);


var appVue = new Vue({
    el: '#app',
    created: function() {
        // var contexto = this;
        // DBlocal.limpiarTareas();
        // DBlocal.insertarTarea(
        //     {    
        //         titulo:'Tarea 3', 
        //         descripcion: '', 
        //         tipo: 0, 
        //         diasElegidos:[],
        //         fecha_inicio: '',
        //         fecha_fin: '',
        //         responsable: ''
        //     }
        // )
        // DBlocal.getTareas(function(data){
        //     contexto.tareas = data;
        //     console.log('tareas', contexto.tareas);
        // });
    },
    data:{
            menu: 'inicio',
            dias: Array(28),
            anchoDia: 50,
            accionModalClasificacion: 'crear',
            tareas:
            [
                {titulo:'Tarea 2', descripcion: '', tipo: 0, diasElegidos:[]},
                {titulo:'Tarea 3', descripcion: '', tipo: 1, diasElegidos:[]},
                {titulo:'Tarea 4', descripcion: '', tipo: 1, diasElegidos:[]},
                {titulo:'Tarea 5', descripcion: '', tipo: 2, diasElegidos:[]},
                {titulo:'Tarea 6', descripcion: '', tipo: 2, diasElegidos:[]},
                {titulo:'Tarea 7', descripcion: '', tipo: 4, diasElegidos:[]},
                {titulo:'Tarea 8', descripcion: '', tipo: 5, diasElegidos:[]},
            ],
            clasificacion:[
                {titulo: 'Reconocimiento', texto: '', color: 'rgb(243, 80, 69)'},
                {titulo: 'Técnico', texto: '', color: 'rgb(224, 107, 103)'},
                {titulo: 'Logística', texto: '', color: 'rgb(233, 87, 63)'},
                {titulo: 'Reconocimiento', texto: '', color: 'rgb(140, 193, 82'},
                {titulo: 'Técnico', texto: '', color: 'rgb(72, 207, 173)'},
                {titulo: 'Logística', texto: '', color: 'rgb(61, 188, 177)'},
                {titulo: 'Reconocimiento', texto: '', color: 'rgb(243, 80, 69)'},
            ],
              
            colores : [
                { color: 'rgb(237, 85, 101)' },
                { color: 'rgb(218, 68, 83)' },
                { color: 'rgb(233, 87, 63)' },
                { color: 'rgb(255, 206, 84)' },
                { color: 'rgb(246, 187, 66)' },
                { color: 'rgb(160, 212, 104)' },
                { color: 'rgb(140, 193, 82)' },
                { color: 'rgb(72, 207, 173)' },
                { color: 'rgb(55, 188, 155)'},
                { color: 'rgb(79, 193, 233)'},
                { color: 'rgb(59, 175, 218)'},
                { color: 'rgb(93, 156, 236)'},
                { color: 'rgb(74, 137, 220)'},
                { color: 'rgb(172, 146, 236)'},
                { color: 'rgb(150, 122, 220)'},
                { color: 'rgb(236, 135, 192)'},
                { color: 'rgb(215, 112, 173)'},
                { color: 'rgb(245, 247, 250)'},
                { color: 'rgb(230, 233, 237)'},
                { color: 'rgb(169, 171, 171)'},
                { color: 'rgb(101, 109, 120)'},
            ]
           
    }, 
    methods: {
        navegar: function(vista){
            
        },
        
        modalClasificacion: function(accion){
            if(accion == 'crear')
            {
                this.$root.accionModalClasificacion = 'crear'
            }
            if( accion == 'editar')
            {
                this.$root.accionModalClasificacion = 'editar'
            }
            if( accion == 'administrar')
            {
                this.$root.accionModalClasificacion = 'administrar'
            }
            $("#modal_clasificacion").modal();
        },
    }
});
