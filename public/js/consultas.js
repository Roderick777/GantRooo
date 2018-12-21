TareasModel.insert(db,
    {    
        titulo:'Tarea 3', 
        descripcion: '', 
        tipo: 0, 
        diasElegidos:[],
        fecha_inicio: '',
        fecha_fin: '',
        responsable: ''
});

TareasModel.all(db, function(data)
{
    console.log(data);
});
    