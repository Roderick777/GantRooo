<template>
<div class="modal" tabindex="-1" role="dialog" id="modal_clasificacion">

	<!-- CREAR -->
	<template v-if="accion == 'crear'">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Crear categoria de tareas</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<label>Ingrese un título para la nueva categoria de tarea</label>
				<textarea name="titulo_clasificacion" id="titulo_clasificacion" v-model="nuevaCategoria.titulo"></textarea>
				<label>Seleccione un color para identificar la categoria</label>
				<div class="paleta_colores">
					<div class="cuadro" v-for="(color, index) in colores" :key="'color_'+index" v-on:click="elegirColor(index, color, 'crear')" v-bind:style="'background-color:'+ color.color +';'"></div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" v-on:click="guardarCategoria('crear')">Guardar</button>
				<button type="button" class="btn btn-secondary" v-on:click="modalClasificacion('administrar')">Volver</button> 
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
			</div>
			</div>
		</div>
	</template>

	<!-- ADMINISTRAR -->
	<template v-if="accion == 'administrar'">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Administrar categorias de tarea</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="card" v-for="(clase, index) in clasificacion" :key="'clasificado_'+index" :style="'background-color: '+clase.color+';'" >
					<div class="card-body card_clasifi">
						<div v-html="clase.titulo" class="texto_clasifi"></div>
						<button class="btn btn-light btn-outline-light accion_editar" v-on:click="editarClasificacion(index, clase)"><i class="fa fa-edit"></i></button>

					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-success" v-on:click="modalClasificacion('crear')">Nueva Categoria</button>
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
			</div>
			</div>
		</div>
	</template>

	<!-- EDITAR -->
	<template v-if="accion == 'editar'">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Editar categoria {{ clasificacion[indiceClasificacionActual].titulo }} </h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				
				<div class="cuadro_grande" v-bind:style="'background-color:'+ clasificacion[indiceClasificacionActual].color +';'"></div>
				<div class="paleta_colores">
					<div class="cuadro" v-for="(color, index) in colores" :key="'color_'+index" v-on:click="elegirColor(index, color, 'editar')" v-bind:style="'background-color:'+ color.color +';'"></div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-success" >Guardar</button>
				<button type="button" class="btn btn-secondary" v-on:click="modalClasificacion('administrar')">Volver</button> 
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
			</div>
			</div>
		</div>
	</template>
</div>
</template>

<script>

export default {
	name: 'ModalClasificacion',
	components: {
	}
	,created: function()
	{

		console.log(this);
	},
	props:
	{
		accion: String
	},
	data(){
	return{
		clasificacion: this.$root.clasificacion,
		indiceClasificacionActual: null,
		nuevaCategoria:{
			titulo: '',
			texto: '',
			color: ''
		},
		colores : [
				{ color: 'rgb(237, 85, 101)' },
				{ color: 'rgb(218, 68, 83)' },
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
		}
	},
	methods:
	{
		modalClasificacion: function(accion){
            this.$root.modalClasificacion(accion);
		},
		editarClasificacion: function(indice, clasificacion){
			this.indiceClasificacionActual = indice;
			this.modalClasificacion('editar')
		},
		elegirColor: function(indiceColor, color, accion){
			if(accion == 'editar'){
				this.$root.clasificacion[this.indiceClasificacionActual].color = color.color; 
			}
			if(accion == 'crear')
			{
				this.nuevaCategoria.color = color.color;
			}
		},
		guardarCategoria: function(accion){
			if(accion == 'crear')
			{
				var objetoNuevaCategoria = {
					titulo: this.nuevaCategoria.titulo,
					texto: this.nuevaCategoria.texto,
					color: this.nuevaCategoria.color
				};
				if(this.nuevaCategoria.titulo.length == '')
				{
					alert('Debe ingresar un titulo para la nueva categoria');
					return;
				}
				if(this.nuevaCategoria.color.length == '')
				{
					alert('Debe seleccionar un color');
					return;
				}
				
				this.$root.clasificacion.push(objetoNuevaCategoria);
				this.modalClasificacion('administrar');
			}
		}
	}
}
</script>
<style scoped>
.cuadro{
	height:43px; width: 43px;
	border: none;
	margin: 1px;
	position: relative;
	float: left;
	transition: 0.3s all ease;
}
.cuadro_grande{
	height:88px; width: 88px;
	border: none;
	margin: 1px;
	position: relative;
	float: left;
	transition: 0.3s all ease;
}
#titulo_clasificacion{
	width: 100%;
	resize: none;
}
.cuadro:hover{
	opacity: .5;
}
.card_clasifi{
	color: #FFFFFF;
	font-size: 17px;
}
.texto_clasifi{
	width: 355px;
	position: relative; float: left;
}
.accion_editar{
	padding-left: 13px !important;
	padding-right: 11px !important;
	margin-bottom: 0px !important;
	border-radius:  70px;
}
</style>