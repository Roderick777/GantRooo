<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>GanttRooo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        @include('fragmento.head')

    </head>
    <body>
       <div id="app">
           <div class="bmd-layout-container bmd-drawer-f-l bmd-drawer-overlay">
               <header class="bmd-layout-header">
                   <div class="navbar navbar-light bg-faded" style="background-color: rgb(243, 80, 69); color: #FFFFFF;">
                       <button class="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-p1" style="border: none !important;">
                           <span class="sr-only">Toggle drawer</span>
                           <i class="fa fa-bars"></i>
                       </button>
                       <ul class="nav navbar-nav">
                           <li class="nav-item">GanttRooo</li>
                       </ul>
                   </div>
               </header>
               <div id="dw-p1" class="bmd-layout-drawer bg-faded">
                   <header>
                       <a class="navbar-brand">GanttRooo</a>
                   </header>
                   <ul class="list-group">
                       <a class="list-group-item" v-on:click="navegar('proyectos')"><i class="fa fa-bars"></i>Proyectos</a>
                       <a class="list-group-item" v-on:click="navegar('gantt')"><i class="fa fa-list"></i>Gantt</a>
                       <a class="list-group-item" v-on:click="navegar('configuracion')"><i class="fa fa-cog"></i>Configuracion</a>
                   </ul>
               </div>
               <main class="bmd-layout-content">
                   <div class="container-fluid">
                       <!-- main content -->
                       <Gantt :dias="dias"/>
                   </div>
               </main>
           </div>
            <Modalclasificacion :accion="accionModalClasificacion"></Modalclasificacion>
       </div>
       <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
