var TareasModel = {
    insert: function(db, datos){
        db.tareas.add(datos);
    },
    all: function(db, callback){
        db.tareas.toArray(function(data) {
            callback(data)
        });
    }

};