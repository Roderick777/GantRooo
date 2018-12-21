var TareasModel = {

};
var DBlocal = {
    getTareas: function(callback){
        var db = new Dexie('Gantt');
        db.version(2).stores({tareas: '++id,titulo, descripcion, diasElegidos, tipo, fecha_inicio, fecha_fin, responsable'});
        db.open().catch(function (error) {alert('Oh no! : ' + error);});

        db.tareas.toArray(function(data) {
            console.log('yeeeeee',data)
            callback(data)
        });
    },

    limpiarTareas: function(callback){
        var db = new Dexie('Gantt');
        db.version(2).stores({tareas: '++id,titulo, descripcion, diasElegidos, tipo, fecha_inicio, fecha_fin, responsable'});
        db.open().catch(function (error) {alert('Oh no! : ' + error);});

        db.tareas.clear();
    },
    
    insertarTarea: function(datos){
        var db = new Dexie('Gantt');
        db.version(2).stores({tareas: '++id,titulo, descripcion, diasElegidos, tipo, fecha_inicio, fecha_fin, responsable'});
        db.open().catch(function (error) {alert('Oh no! : ' + error);});

        db.tareas.add(datos);  
    }
}




































// Encontrar amigos viejitos
// db.tareas
// .where('age')
// .above(75)
// .each(function(friend) {
//     console.log(friend.name);
// });

// LIMPIAR TABLE
// db.tareas.clear()

// INSERTAR REGISTRO

// db.tareas.add({    
//     titulo:'Tarea 3', 
//     descripcion: '', 
//     tipo: 0, 
//     diasElegidos:[],
//     fecha_inicio: '',
//     fecha_fin: '',
//     responsable: ''
// });


// Actualizar registro 
// db.tareas.update(1, {titulo: "Yeahhhh 535465475  !!!"}).then(function (updated) {
//     if (updated)
//       console.log ("Friend number 2 was renamed to Number 2");
//     else
//       console.log ("Nothing was updated - there were no friend with primary key: 2");
//   });

// CONSULTAR TABLA

// db.tareas.toArray(function(tarea) {
//     console.log("dexie: ", tarea);
// });

// ELIMINAR BASE DE DATOS

//db.delete();
// Static method
//Dexie.delete('Gantt');
// Definimos un esquema (tabla) y sus campos